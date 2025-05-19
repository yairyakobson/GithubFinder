import { useContext } from "react";

import GitContext from "../../context/github/GitContext";
import Spinner from "../layout/Spinner";
import UsersItem from "./UsersItem";

function UsersList(){
  const { users, loading } = useContext(GitContext)

  if(!loading){
    return(
      <section className="grid grid-cols-3 gap-8
      sm:grid-cols-1
      xl:grid-cols-4">
      {users.map((user) =>(
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