import { useEffect } from "react";

function UsersList(){
  useEffect(() =>{
    fetchUsers();
  },[])

  const fetchUsers = async () =>{
    const response = await fetch(`${process.env.REACT_APP_GIT_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GIT_TOKEN}`,
      },
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>User Result</div>
  )
}
export default UsersList;