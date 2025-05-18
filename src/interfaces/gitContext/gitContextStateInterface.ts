import type { UserProps } from "../user/gitUserInterface";

export interface GitContextStateProps{
  users: UserProps[];
  user: Record<string, any>;
  repos: [];
  loading: boolean;
}