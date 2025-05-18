import React from "react";

import type { RepoProps } from "../../interfaces/user/gitRepoInterface";

import ReposItem from "./ReposItem";

const UserRepos: React.FC<RepoProps> = ({ repos }) =>{
  return(
    <section className="rounded-lg shadow-lg card bg-base-100">
      <section className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">Latest Repositories</h2>
        {repos.map((repo: any) => (
          <ReposItem key={repo.id} repo={repo}
          className="outline-black"/>
        ))}
      </section>
    </section>
  )
}

export default UserRepos;