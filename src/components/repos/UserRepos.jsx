import PropTypes from 'prop-types'
import ReposItem from './ReposItem'

function UserRepos({repos}){
  return(
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">Latest Repositories</h2>
        {repos.map((repo) => (
          <ReposItem key={repo.id} repo={repo} className="outline-black"/>
        ))}
      </div>
    </div>
  )
}
UserRepos.propTypes = {
  repos: PropTypes.array.isRequired
}
export default UserRepos;