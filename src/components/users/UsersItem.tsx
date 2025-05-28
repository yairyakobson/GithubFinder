import { Link } from "react-router";

import type { GithubSingleUserProps } from "../../interfaces/user/githubSingleUserInterface";

function UsersItem({ user: { login, avatar_url } }: GithubSingleUserProps){
  return (
    <section className="card shadow-md bg-slate-100 text-2xl">
      <section className="card-body flex-row items-center space-x-3">
        <section>
          <section>
            <section className="rounded-full w-14 h-14">
              <img src={avatar_url} alt="Profile"
              className="rounded-full"/>
            </section>
          </section>
        </section>

        <section>
          <Link to={`/user/${login}`}
          className="card-title mb-5
          md:mb-8">{login}</Link>
        </section>
      </section>

      <Link to={`/user/${login}`}
      target="_blank"
      className="btn btn-md absolute bottom-1 right-1 text-base
      md:btn-sm md:text-xs">Visit Profile</Link>
    </section>
  );
}

export default UsersItem;