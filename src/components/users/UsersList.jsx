import { useContext } from "react";
import GitContext from "../../context/github/GitContext";
import Spinner from "../layout/Spinner";
import UsersItem from "./UsersItem";

function UsersList(){
  const {users, loading} = useContext(GitContext)

  if(!loading){
    return(
      <div className="grid grid-cols-1 gap-8
      xl:grid-cols-4
      lg:grid-cols-3
      md:grid-cols-2">{users.map((user) =>(
        <UsersItem key={user.id} user={user}/>
      ))};
      </div>
    );
  }
  else{
    return <Spinner/>
  };
};
export default UsersList;