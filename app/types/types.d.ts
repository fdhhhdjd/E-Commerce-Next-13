import { User } from "next-auth";

export type UserSession =
  | (User & {
      id: string;
    })
  | undefined;
