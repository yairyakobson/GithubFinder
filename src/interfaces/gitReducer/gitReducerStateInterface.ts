import type { RepoProps } from "../user/gitRepoInterface";
import type { UserProps } from "../user/gitUserInterface";

export interface GitReducerStateProps{
  users: UserProps[];
  user: UserProps | Record<string, never>;
  repos: RepoProps[];
  repo: any;
  loading: boolean;
}