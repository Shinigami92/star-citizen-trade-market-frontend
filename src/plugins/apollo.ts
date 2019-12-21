import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink, split } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { FragmentDefinitionNode, OperationDefinitionNode } from 'graphql';
import Vue from 'vue';
import VueApollo from 'vue-apollo';

export const APOLLO_AUTH_TOKEN: string = 'apollo-token';

// Http endpoint
const httpEndpoint: string = process.env.VUE_APP_GRAPHQL_HTTP || 'http://localhost:3000/graphql';

// HTTP connection to the API
const httpLink: ApolloLink = createHttpLink({
  // You should use an absolute URL here
  uri: httpEndpoint,
  credentials: 'same-origin'
});

// WS endpoint
const wsEndpoint: string = process.env.VUE_APP_GRAPHQL_WS || 'ws://localhost:3000/graphql';

// Create the subscription websocket link
const wsLink: WebSocketLink = new WebSocketLink({
  uri: wsEndpoint,
  options: {
    reconnect: true
  }
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link: ApolloLink = split(
  // split based on operation type
  (operation) => {
    const token: string | null = localStorage.getItem(APOLLO_AUTH_TOKEN);
    if (token) {
      operation.setContext({
        headers: { authorization: `Bearer ${token}` }
      });
    }

    const definition: OperationDefinitionNode | FragmentDefinitionNode = getMainDefinition(operation.query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink
);

// Cache implementation
const cache: InMemoryCache = new InMemoryCache();

// Create the apollo client
const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link,
  cache,
  connectToDevTools: true
});

Vue.use(VueApollo);

export const apolloProvider: VueApollo = new VueApollo({
  defaultClient: apolloClient
});

// Manually call this when user log in
export async function onLogin(apolloClient: ApolloClient<NormalizedCacheObject>, token: string): Promise<void> {
  if (token) {
    localStorage.setItem(APOLLO_AUTH_TOKEN, token);
  }
  await apolloClient.resetStore();
}

// Manually call this when user log out
export async function onLogout(apolloClient: ApolloClient<NormalizedCacheObject>): Promise<void> {
  localStorage.removeItem(APOLLO_AUTH_TOKEN);
  await apolloClient.resetStore();
}
