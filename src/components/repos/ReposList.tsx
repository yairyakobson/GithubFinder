import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

import type { SingleRepoProps } from "../../interfaces/repos/githubSingleRepoInterface";

function ReposList({ repo }: SingleRepoProps){
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo

  return(
    <section className="card mb-2 rounded-xl bg-gray-800 text-white
    hover:bg-inherit
    hover:text-black
    hover:outline
    hover:outline-inherit">
      <section className="card-body
      md:text-lg">
        <h3 className="repo-data mb-2 font-bold pb-2
        lg:text-xl
        xl:text-2xl">
        <a href={html_url}>
          <FaLink className="inline mr-3"/>{name}
        </a>

        </h3>
        <p className="repo-data mb-5
        lg:text-lg
        xl:text-xl">{description}</p>

        <section>
          <section className="repo-data badge badge-info badge-lg mr-5 p-3
          lg:text-lg lg:p-2">
            <FaEye className="mr-2"/>{watchers_count}
          </section>

          <section className="repo-data badge badge-success badge-lg mr-5 p-3
          lg:text-lg lg:p-2">
            <FaStar className="mr-2"/>{stargazers_count}
          </section>

          <section className="repo-data badge badge-error badge-lg mr-5 p-3
          lg:text-lg lg:p-2">
            <FaInfo className="mr-2"/>{open_issues}
          </section>

          <section className="repo-data badge badge-warning badge-lg mr-5 p-3
          lg:text-lg lg:p-2">
            <FaUtensils className="mr-2"/>{forks}
          </section>
        </section>
      </section>
    </section>
  )
}

export default ReposList;