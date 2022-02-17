import UsersList from "../components/users/UsersList"
import UsersSearch from "../components/users/UsersSearch"

function Home(){
  return(
    <div>
      <UsersSearch/>
      <UsersList/>
    </div>
  )
}
export default Home;