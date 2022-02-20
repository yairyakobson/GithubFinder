import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import GitContext from "../context/github/GitContext";

function User(){
  const {getUser, user } = useContext(GitContext);
  const params = useParams();

  useEffect(() =>{
     getUser(params.login);
  }, []);

  return(
    <div>{params.login}</div>
  );
};
export default User;