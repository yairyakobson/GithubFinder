import { FaCodepen, FaUserFriends, FaUsers } from "react-icons/fa";
import type { GithubDataProps } from "../../interfaces/user/dataInterfaces/githubDataInterface";

export const UserGithubData = ({
    followers,
    following,
    public_repos
}: GithubDataProps) =>{
  return(
    <section className="stats w-full py-5 my-6
    rounded-xl shadow-md bg-slate-100">
      <section className="grid grid-cols-1
      md:grid-cols-3">
        <section className="stat">
          <section className="stat-figure text-secondary mt-2">
            <FaUsers className="text-[2.7rem]
            md:text-5xl md:mt-5"/>
          </section>
          <section className="stat-title pr-5 pro-data
          md:text-xl md:font-bold">Followers</section>
          <section className="stat-value pr-5 text-3xl
          md:text-4xl md:mt-1">
            {followers}
          </section>
        </section>
        
        <section className="stat">
          <section className="stat-figure text-secondary mt-2">
            <FaUserFriends className="text-[2.7rem]
            md:text-5xl md:mt-5"/>
          </section>
          <section className="stat-title pr-5 pro-data
          md:text-xl md:font-bold">Following</section>
          <section className="stat-value pr-5 text-3xl
          md:text-4xl md:mt-1">
            {following}
          </section>
        </section>
    
        <section className="stat">
          <section className="stat-figure text-secondary mt-2">
            <FaCodepen className="text-[2.7rem]
            md:text-5xl md:mt-5"/>
          </section>
          <section className="stat-title pr-5 pro-data
          md:text-xl md:font-bold">Public Repos</section>
          <section className="stat-value pr-5 text-3xl
          md:text-4xl md:mt-1">
            {public_repos}
          </section>
        </section>
      </section>
    </section>
  )
}