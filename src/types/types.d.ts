import { User } from 'next-auth';

export type UserSession =
	| (User & {
			id: string;
	  })
	| undefined;

export interface FullProduct {
	id: string;
	name: string;
	image: string;
	description: string;
	price: number;
	_count: {
		orderItems: number;
	};
}

export interface FullProductClient {
	id: string;
	sizes: string[];
	createdAt: string;
	categoryId: string;
	updatedAt?: string | null;
}
