import type { UserRepoListProps } from "../../interfaces/repos/gitRepoListInterface";

import ReposList from "./ReposList";

function UserRepos({ repos }: UserRepoListProps){
  return(
    <section className="card rounded-xl shadow-lg bg-slate-100">
      <section className="card-body">
        <h2 className="card-title text-3xl my-3 font-bold">Latest Repositories</h2>
        {repos.map((repo) => (
          <ReposList key={repo.id} repo={repo}/>
        ))}
      </section>
    </section>
  )
}

export default UserRepos;