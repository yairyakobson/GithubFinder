import { use } from "react";
import type { GitContextTypeProps } from "../../interfaces/gitContext/gitContextInterface";

import UsersItem from "./UsersItem";
import Spinner from "../layout/Spinner";
import GitContext from "../../context/github/GitContext";

function UsersList(){
  const { users, loading } = use(GitContext) as GitContextTypeProps
  
  if(!loading){
    return(
      <section className="grid grid-cols-3 gap-8
      sm:grid-cols-1
      xl:grid-cols-4">
      {users.map((user) =>(
        <UsersItem key={user.id} {...user}/>
      ))}
      </section>
    );
  }
  return <Spinner/>
}

export default UsersList;