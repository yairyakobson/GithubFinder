import type { RepoProps } from "../interfaces/user/gitRepoInterface";
import type { UserProps } from "../interfaces/user/gitUserInterface";

export type GitAction =
  | { type: "GET_USERS";
    payload: UserProps[]
  }
  | { type: "GET_USER_AND_REPOS";
    payload: {
    user: UserProps;
    repos: RepoProps[]
  }
  }
  | { type: "SET_LOADING" }
  | { type: "CLEAR_USERS" };