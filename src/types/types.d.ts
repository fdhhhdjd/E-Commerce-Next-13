//* LIB
import { User } from 'next-auth';

//* IMPORT
import { cartItemSchema } from '../helpers/validations/cartItemSchema';

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
	sizes: number[];
	createdAt: string;
	categoryId: string;
	updatedAt?: string | null;
	handleClickAfter?: () => void;
	name: string;
	image: string;
	price: number;
	description: string;
	quantity: number;
}

export type CartItem = z.infer<typeof cartItemSchema>;
