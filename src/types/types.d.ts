import { User } from 'next-auth';

export type UserSession =
	| (User & {
			id: string;
	  })
	| undefined;

export interface FullProduct extends Product {
	id: string;
	name: string;
	image: string;
	description: string;
	price: number;
	_count: {
		orderItems: number;
	};
}

export interface FullProductClient extends Omit<FullProduct, 'sizes' | 'createdAt' | 'updatedAt'> {
	sizes: string[];
	createdAt: string;
	updatedAt?: string | null;
}
