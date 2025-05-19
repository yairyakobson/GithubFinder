import { useEffect, useContext } from "react";
import { Link, useParams } from "react-router";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa"

import { getUserInfo } from "../context/github/GitActions";
import GitContext from "../context/github/GitContext";
import Spinner from "../components/layout/Spinner";
import UserRepos from "../components/repos/UserRepos";

function User(){
  const { user, loading, repos, dispatch } = useContext(GitContext);
  const params = useParams();

  useEffect(() =>{
    dispatch({ type: "SET_LOADING" });

    const getUserData = async() =>{
      const userData = await getUserInfo(params.login);
      dispatch({ type: "GET_USER_AND_REPOS", payload: userData });
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

  return(
    <>
      <section className="w-full mx-auto lg:w-10/12">
        <section className="mb-4">
          <Link to="/" className="btn btn-ghost
          md:text-xl
          lg:text-lg
          xl:text-base">Back To Search
          </Link>
        </section>

        <section className="grid grid-cols-1
        md:grid-cols-3 mb-8 gap-8
        lg:grid-cols-3
        xl:grid-cols-3">
          <section className="rounded-lg shadow-xl card image-full">
            <figure>
              <img src={avatar_url} alt=""/>
            </figure>

            <section className="card-body justify-end">
              <h2 className="card-title mb-0 text-xl
              md:text-2xl">{name}</h2>
              <p className="text-lg
              md:text-xl">{login}</p>
            </section>
          </section>
        </section>

        <section className="col-span-2">
          <section className="mb-6">
            <h1 className="text-3xl card-title
            md:text-4xl">{name}
              <section className="ml-2 mr-1 mt-3 badge badge-success">{type}</section>
              {hireable && (
                <section className="mt-3 badge badge-info">Hireable</section>
              )}
            </h1>

            <p className="mt-4
            sm:text-xl">{bio}</p>
            <section className="mt-4 card-actions">
              <a href={html_url}
              className="btn btn-outline mt-3
              md:text-lg"
              target="_blank"
              rel="noreferrer">Visit Github Profile
              </a>
            </section>
          </section>

          <section className="w-full rounded-lg shadow-md bg-base-100 stats">
            <section className="grid grid-cols-1 md:grid-cols-3">
              {location && (
                <section className="stat">
                  <section className="stat-title
                  md:text-xl font-bold">Location</section>
                  <section className="text-xl stat-value mt-2
                  md:text-xl">{location}</section>
                  </section>
              )}
              {blog && (
                <section className="stat">
                  <section className="stat-title
                  md:text-xl font-bold">Website</section>
                  <section className="text-xl stat-value mt-2
                  md:text-xl">
                    <a href={`https://${blog}`}
                    target="_blank"
                    rel="noreferrer">{blog}
                    </a>
                  </section>
                </section>
              )}

              {twitter_username && (
                <section className="stat">
                  <section className="stat-title
                  md:text-xl font-bold">Twitter</section>
                  <section className="text-xl stat-value mt-2
                  md:text-xl">
                    <a href={`https://twitter.com/${twitter_username}`}
                    target="_blank"
                    rel="noreferrer">{twitter_username}
                    </a>
                  </section>
                </section>
              )}
            </section>
          </section>
        </section>

        <section className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <section className="grid grid-cols-1 md:grid-cols-3">
            <section className="stat">
                <section className="stat-figure text-secondary mt-2">
                  <FaUsers className="text-3xl md:text-5xl mt-5"/>
                </section>
              <section className="stat-title pr-5
              md:text-xl font-bold">Followers</section>
              <section className="stat-value pr-5 text-3xl md:text-4xl mt-1">
                {followers}
              </section>
            </section>

            <section className="stat">
              <section className="stat-figure text-secondary mt-2">
                <FaUserFriends className="text-3xl md:text-5xl mt-5"/>
              </section>
              <section className="stat-title pr-5
              md:text-xl font-bold">Following</section>
              <section className="stat-value pr-5 text-3xl md:text-4xl mt-1">
                {following}
              </section>
            </section>

            <section className="stat">
              <section className="stat-figure text-secondary mt-2">
                <FaCodepen className="text-3xl md:text-5xl mt-5"/>
              </section>
              <section className="stat-title pr-5
              md:text-xl font-bold">Public Repos</section>
              <section className="stat-value pr-5 text-3xl md:text-4xl mt-1">
                {public_repos}
              </section>
            </section>

            <section className="stat">
              <section className="stat-figure text-secondary mt-2">
                <FaStore className="text-3xl md:text-5xl mt-5"/>
              </section>
              <section className="stat-title pr-5
              md:text-xl font-bold">Public Gists</section>
              <section className="stat-value pr-5 text-3xl md:text-4xl mt-1">
                {public_gists}
              </section>
            </section>
          </section>
        </section>
        <UserRepos repos={repos}/>
      </section>
    </>
  );
};

export default User;