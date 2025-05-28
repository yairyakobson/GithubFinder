import type { GithubUsersListProps } from "../../interfaces/user/githubUserListInterface";

import UsersItem from "./UsersItem";
import Spinner from "../layout/Spinner";

function UsersList({ users, isLoading }: GithubUsersListProps){

  if(!isLoading){
    return(
      <section className="grid grid-cols-1 gap-8
      md:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      2xl:grid-cols-5">
      {users?.map((user) =>(
        <UsersItem key={user.id} user={user}/>
      ))}
      </section>
    );
  }
  else{
    return <Spinner/>
  };
};

export default UsersList;