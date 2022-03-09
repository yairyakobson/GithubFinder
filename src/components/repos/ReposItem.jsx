import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'
import PropTypes from 'prop-types'

function ReposItem({repo}){
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
      <div className="mb-2 rounded-md card bg-gray-800 text-white hover:bg-white hover:text-black outline hover:outline-black">
          <div className="card-body">
              <h3 className="mb-2 font-bold pb-2
              xl:text-2xl
              lg:text-2xl
              sm:text-xl">
                  <a href={html_url}>
                      <FaLink className="inline mr-1"/>{name}
                  </a>
              </h3>
              <p className="mb-5
              xl:text-xl
              lg:text-2xl
              sm:text-base">{description}</p>
              <div>
                  <div className="badge badge-info badge-lg mr-3
                  xl:p-3
                  lg:text-xl p-2
                  sm:text-base p-3">
                      <FaEye className="mr-2"/>{watchers_count}
                  </div>
                  <div className="badge badge-success badge-lg mr-3
                  xl:p-3
                  lg:text-xl p-2
                  sm:text-base p-3">
                      <FaStar className="mr-2"/>{stargazers_count}
                  </div>
                  <div className="badge badge-error badge-lg mr-3
                  xl:p-3
                  lg:text-xl p-2
                  sm:text-base p-3">
                      <FaInfo className="mr-2"/>{open_issues}
                  </div>
                  <div className="badge badge-warning badge-lg mr-3
                  xl:p-3
                  lg:text-xl p-2
                  sm:text-base p-3">
                      <FaUtensils className="mr-2"/>{forks}
                  </div>
              </div>
          </div>
      </div>
  )
}

ReposItem.propTypes = {
    repo: PropTypes.object.isRequired
  }
export default ReposItem;