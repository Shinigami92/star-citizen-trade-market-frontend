import { Account, Role } from './graphql.schema';

export class CurrentUser implements Partial<Account> {
	public readonly id: string;
	public readonly username: string;
	public readonly token: string;
	public readonly roles: Role[];

	constructor({ id, username, token, roles }: { id: string; username: string; token: string; roles: Role[] }) {
		this.id = id;
		this.username = username;
		this.token = token;
		this.roles = roles;
	}

	public hasRole(role: Role): boolean {
		return this.roles.includes(role);
	}

	public hasAnyRole(roles: Role[]): boolean {
		for (const role of roles) {
			if (this.hasRole(role)) {
				return true;
			}
		}
		return false;
	}
}

export function currentUser(): CurrentUser | null {
	const auth: string | null = localStorage.getItem('auth');
	if (auth === null) {
		return null;
	}
	return new CurrentUser(JSON.parse(auth));
}
