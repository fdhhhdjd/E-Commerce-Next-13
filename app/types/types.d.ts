import { User } from "next-auth";

export type UserSession =
  | (User & {
      id: string;
    })
  | undefined;

export interface FullProduct extends Product {
  category: Category;
  _count: {
    orderItems: number;
  };
}

export interface FullProductClient
  extends Omit<FullProduct, "sizes" | "createdAt" | "updatedAt"> {
  sizes: string[];
  createdAt: string;
  updatedAt?: string | null;
}
