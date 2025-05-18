import { Link } from "react-router";

import type { UserProps } from "../../interfaces/user/gitUserInterface";

const UsersItem: React.FC<UserProps> = ({
  login,
  avatar_url
}) =>{
  return(
    <section className="card shadow-md compact side bg-base-50 text-2xl">
      <section className="flex-row items-center space-x-4 card-body">
        <section>
          <section className="avatar">
            <section className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="Profile"/>
            </section>
          </section>
        </section>

        <section>
          <h2 className="card-title">{login}</h2>
          <Link className="text-base-content text-opacity-40" to={`/user/${login}`}>Visit Profile</Link>
        </section>
      </section>
    </section>
  )
}

export default UsersItem;