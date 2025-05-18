import React from "react";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

import type { RepoProps } from "../../interfaces/user/gitRepoInterface";

const ReposItem: React.FC<RepoProps> = ({ repo }) =>{
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count
  } = repo

  return(
    <section className="mb-2 rounded-md card bg-gray-800 text-white hover:bg-white hover:text-black outline hover:outline-black">
      <section className="card-body">
        <h3 className="mb-2 font-bold pb-2
        sm:text-xl
        lg:text-2xl
        xl:text-2xl">
        <a href={html_url}>
          <FaLink className="inline mr-1"/>{name}
        </a>

        </h3>
        <p className="mb-5
        sm:text-base
        lg:text-2xl
        xl:text-xl">{description}</p>

        <section>
          <section className="badge badge-info badge-lg mr-3
          sm:text-base sm:p-3
          lg:text-xl lg:p-2
          xl:p-3">
            <FaEye className="mr-2"/>{watchers_count}
          </section>

          <section className="badge badge-success badge-lg mr-3
          sm:text-base sm:p-3
          lg:text-xl lg:p-2
          xl:p-3">
            <FaStar className="mr-2"/>{stargazers_count}
          </section>

          <section className="badge badge-error badge-lg mr-3
          sm:text-base sm:p-3
          lg:text-xl lg:p-2
          xl:p-3">
            <FaInfo className="mr-2"/>{open_issues}
          </section>

          <section className="badge badge-warning badge-lg mr-3
          sm:text-base sm:p-3
          lg:text-xl lg:p-2
          xl:p-3">
            <FaUtensils className="mr-2"/>{forks}
          </section>
        </section>
      </section>
    </section>
  )
}

export default ReposItem;