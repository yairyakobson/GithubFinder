import { Link, useParams } from "react-router";

import { useGetUserAndReposQuery } from "../redux/api/services/githubApi";
import { UserPersonalData } from "./userPages/userPersonalData";
import { UserProfessionalData } from "./userPages/userProfessionalData";
import { UserGithubData } from "./userPages/userGithubData";

import Spinner from "../components/layout/Spinner";
import UserRepos from "../components/repos/UserRepos";

function User(){
  const params = useParams();
  const { data, isLoading } = useGetUserAndReposQuery(params.login!);

  if(isLoading || !data){
    return <Spinner/>
  }

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
    hireable
  } = data.user

  const repos = data?.repos ?? [];

  return(
    <>
      <section className="w-full mx-auto
      lg:w-10/12">
        <section className="px-5">
          <Link to="/" replace className="btn btn-block button-text
          md:text-xl
          lg:text-lg">Back To Search
          </Link>
        </section>

        <UserPersonalData
        name={name}
        type={type}
        avatar_url={avatar_url}
        bio={bio}
        login={login}
        html_url={html_url}
        hireable={hireable}/>

        <UserProfessionalData
        blog={blog}
        twitter_username={twitter_username}
        location={location}/>

        <UserGithubData
        followers={followers}
        following={following}
        public_repos={public_repos}/>

        <UserRepos repos={repos}/>
      </section>
    </>
  );
};

export default User;