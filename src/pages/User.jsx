import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import { useEffect, useContext } from "react";
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";

import Spinner from '../components/layout/Spinner'
import GitContext from "../context/github/GitContext";
import UserRepos from '../components/repos/UserRepos';
import { getUserInfo } from "../context/github/GitActions";

function User(){
  const { user, loading, repos, dispatch } = useContext(GitContext);
  const params = useParams();

  useEffect(() =>{
    dispatch({type: "SET_LOADING"})
    const getUserData = async() =>{
      const userData = await getUserInfo(params.login);
      dispatch({type: "GET_USER_AND_REPOS", payload: userData});
    }
    getUserData();
  }, [dispatch, params.login]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user

  if(loading){
    return <Spinner/>
  }

  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to='/' className='btn btn-ghost
          xl:text-base
          lg:text-lg
          md:text-xl'>
            Back To Search
          </Link>
        </div>

        <div className='grid grid-cols-1
        xl:grid-cols-3
        lg:grid-cols-3
        md:grid-cols-3 mb-8 md:gap-8'>
            <div className='rounded-lg shadow-xl card image-full'>
              <figure>
                <img src={avatar_url} alt='' />
              </figure>
              <div className='card-body justify-end'>
                <h2 className='card-title mb-0
                md:text-2xl'>{name}</h2>
                <p className='text-lg
                md:text-xl'>{login}</p>
              </div>
            </div>
          </div>

          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-3xl card-title
              md:text-4xl'>
                {name}
                <div className='ml-2 mr-1 mt-3 badge badge-success'>{type}</div>
                {hireable && (
                  <div className='mt-3 badge badge-info'>Hireable</div>
                )}
              </h1>
              <p className='mt-4
              sm:text-xl'>{bio}</p>
              <div className='mt-4 card-actions'>
                <a
                  href={html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-outline mt-3
                  md:text-lg'>Visit Github Profile
                </a>
              </div>
            </div>

            <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
              <div className='grid grid-cols-1 md:grid-cols-3'>
              {location && (
                <div className='stat'>
                  <div className='stat-title
                  md:text-xl font-bold'>Location</div>
                  <div className='text-xl stat-value mt-2
                  md:text-xl'>{location}</div>
                </div>
              )}
              {blog && (
                <div className='stat'>
                  <div className='stat-title
                  md:text-xl font-bold'>Website</div>
                  <div className='text-xl stat-value mt-2
                  md:text-xl'>
                    <a
                      href={`https://${blog}`}
                      target='_blank'
                      rel='noreferrer'>{blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className='stat'>
                  <div className='stat-title
                  md:text-xl font-bold'>Twitter</div>
                  <div className='text-xl stat-value mt-2
                  md:text-xl'>
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target='_blank'
                      rel='noreferrer'>{twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
          <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='stat'>
            <div className='stat-figure text-secondary mt-2'>
              <FaUsers className='text-3xl md:text-5xl mt-5'/>
            </div>
            <div className='stat-title pr-5
            md:text-xl font-bold'>Followers</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl mt-1'>
              {followers}
            </div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary mt-2'>
              <FaUserFriends className='text-3xl md:text-5xl mt-5'/>
            </div>
            <div className='stat-title pr-5
            md:text-xl font-bold'>Following</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl mt-1'>
              {following}
            </div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary mt-2'>
              <FaCodepen className='text-3xl md:text-5xl mt-5'/>
            </div>
            <div className='stat-title pr-5
            md:text-xl font-bold'>Public Repos</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl mt-1'>
              {public_repos}
            </div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary mt-2'>
              <FaStore className='text-3xl md:text-5xl mt-5'/>
            </div>
            <div className='stat-title pr-5
            md:text-xl font-bold'>Public Gists</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl mt-1'>
              {public_gists}
            </div>
          </div>
        </div>
      </div>
      <UserRepos repos={repos}/>
    </div>
  </>
  );
};
export default User;
