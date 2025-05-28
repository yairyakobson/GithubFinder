import { createApi } from "@reduxjs/toolkit/query/react";

import type { GithubUserProps } from "../../../interfaces/user/githubUserInterface";
import type { GithubUserInfoProps } from "../../../interfaces/user/githubUserInfoInterface";
import type { GithubRepoInfoProps } from "../../../interfaces/repos/gitRepoInfoInterface";

import axiosBaseQuery from "../axiosBaseQuery";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: axiosBaseQuery({ baseUrl: import.meta.env.VITE_GIT_URL }),
  endpoints: (builder) =>({

    // search users
    searchUsers: builder.query<GithubUserProps[], string>({
      query: (text: string) =>({
        url: "/search/users",
        method: "GET",
        params: { q: text }
      }),
      transformResponse: (response: { items: GithubUserProps[] }) => response.items
    }),

    // get user and repos together
    getUserAndRepos: builder.query<
      { user: GithubUserInfoProps; repos: GithubRepoInfoProps[] },
      string>({
      async queryFn(login, _queryApi, _extraOptions, baseQuery){
        const [userRes, reposRes] = await Promise.all([
          baseQuery({ url: `/users/${login}`, method: "GET" }),
          baseQuery({ url: `/users/${login}/repos`, method: "GET" })
        ]);

        if("error" in userRes || "error" in reposRes){
          return{
            error: userRes.error || reposRes.error
          };
        };

        return{
          data: {
            user: userRes.data as GithubUserInfoProps,
            repos: reposRes.data as GithubRepoInfoProps[]
          }
        };
      }
    })
  })
});

export const {
  useSearchUsersQuery,
  useLazySearchUsersQuery,
  useGetUserAndReposQuery,
  useLazyGetUserAndReposQuery
} = githubApi;