import { ApolloCache } from 'apollo-cache';
import { InMemoryCacheConfig, NormalizedCacheObject } from 'apollo-cache-inmemory';
import ApolloClient, { ApolloClientOptions } from 'apollo-client';
import { ApolloLink, FetchResult, NextLink, Observable, Operation } from 'apollo-link';
import { HttpOptions, UriFunction } from 'apollo-link-http-common';
import { ClientStateConfig } from 'apollo-link-state';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { ErrorHandler } from 'vue-apollo/types/options';
// @ts-ignore
import { createApolloClient, restartWebsockets } from 'vue-cli-plugin-apollo/graphql-client';

interface CreateApolloClientOptions<TCacheShape = NormalizedCacheObject> {
	httpEndpoint?: string | UriFunction | undefined;
	wsEndpoint?: string | null;
	tokenName?: string;
	persisting?: boolean;
	ssr?: boolean;
	websocketsOnly?: boolean;
	link?: ApolloLink | null;
	defaultHttpLink?: boolean;
	httpLinkOptions?: HttpOptions;
	cache?: ApolloCache<TCacheShape> | null;
	inMemoryCacheOptions?: InMemoryCacheConfig | null;
	apollo?: ApolloClientOptions<TCacheShape>;
	clientState?: ClientStateConfig | null;
	getAuth?: (tokenName: string) => string | undefined;
}

type ObservableFetchResult = Observable<FetchResult<Record<string, any>, Record<string, any>>>;
type RequestObservableFetchResultFunction = (operation: Operation, forward?: NextLink) => ObservableFetchResult;

interface CreatedApolloClient<TCacheShape = NormalizedCacheObject> {
	apolloClient: ApolloClient<TCacheShape> & {
		wsClient?: SubscriptionClient;
	};
	wsClient?: SubscriptionClient;
	stateLink?: {
		writeDefaults(): void;
		request(operation: Operation, forward?: NextLink): ObservableFetchResult;
		split(
			test: (op: Operation) => boolean,
			left: ApolloLink | RequestObservableFetchResultFunction,
			right?: ApolloLink | RequestObservableFetchResultFunction
		): ApolloLink;
		concat(next: ApolloLink | RequestObservableFetchResultFunction): ApolloLink;
	};
}

// Install the vue plugin
Vue.use(VueApollo);

// Name of the localStorage item
export const APOLLO_AUTH_TOKEN: string = 'apollo-token';

// Http endpoint
const httpEndpoint: string = process.env.VUE_APP_GRAPHQL_HTTP || 'http://localhost:3000/graphql';
// Files URL root
export const filesRoot: string =
	process.env.VUE_APP_FILES_ROOT || httpEndpoint.substr(0, httpEndpoint.indexOf('/graphql'));

Vue.prototype.$filesRoot = filesRoot;

// Config
const defaultOptions: CreateApolloClientOptions = {
	// You can use `https` for secure connection (recommended in production)
	httpEndpoint,
	// You can use `wss` for secure connection (recommended in production)
	// Use `null` to disable subscriptions
	wsEndpoint: process.env.VUE_APP_GRAPHQL_WS || 'ws://localhost:3000/graphql',
	// LocalStorage token
	tokenName: APOLLO_AUTH_TOKEN,
	// Enable Automatic Query persisting with Apollo Engine
	persisting: false,
	// Use websockets for everything (no HTTP)
	// You need to pass a `wsEndpoint` for this to work
	websocketsOnly: false,
	// Is being rendered on the server?
	ssr: false

	// Override default apollo link
	// note: don't override httpLink here, specify httpLink options in the
	// httpLinkOptions property of defaultOptions.
	// link: myLink

	// Override default cache
	// cache: myCache

	// Override the way the Authorization header is set
	// getAuth: (tokenName) => ...

	// Additional ApolloClient options
	// apollo: { ... }

	// Client local data (see apollo-link-state)
	// clientState: { resolvers: { ... }, defaults: { ... } }
};

// Call this in the Vue app file
export function createProvider(options: CreateApolloClientOptions = {}): VueApollo {
	// Create apollo client
	const { apolloClient, wsClient }: CreatedApolloClient<NormalizedCacheObject> = createApolloClient({
		...defaultOptions,
		...options
	});
	apolloClient.wsClient = wsClient;

	// Create vue apollo provider
	const apolloProvider: VueApollo = new VueApollo({
		defaultClient: apolloClient,
		defaultOptions: {
			$query: {
				// fetchPolicy: 'cache-and-network',
			}
		},
		errorHandler(error: Error): ErrorHandler<{}> | undefined {
			console.log(
				'%cError',
				'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
				error.message
			);
			return;
		}
	});

	return apolloProvider;
}

// Manually call this when user log in
export async function onLogin(
	apolloClient: ApolloClient<NormalizedCacheObject> & { wsClient?: SubscriptionClient },
	token: string
): Promise<void> {
	if (token) {
		localStorage.setItem(APOLLO_AUTH_TOKEN, token);
	}
	if (apolloClient.wsClient) {
		restartWebsockets(apolloClient.wsClient);
	}
	try {
		await apolloClient.resetStore();
	} catch (error) {
		console.log('%cError on cache reset (login)', 'color: orange;', error.message);
	}
}

// Manually call this when user log out
export async function onLogout(
	apolloClient: ApolloClient<NormalizedCacheObject> & { wsClient?: SubscriptionClient }
): Promise<void> {
	localStorage.removeItem(APOLLO_AUTH_TOKEN);
	if (apolloClient.wsClient) {
		restartWebsockets(apolloClient.wsClient);
	}
	try {
		await apolloClient.resetStore();
	} catch (error) {
		console.log('%cError on cache reset (logout)', 'color: orange;', error.message);
	}
}
