import type { GithubUserProps } from "./githubUserInterface";

export interface GithubUsersListProps{
  users: GithubUserProps[];
  isLoading: boolean;
}