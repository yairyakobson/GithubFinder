import UsersList from "../components/users/UsersList";
import UsersSearch from "../components/users/UsersSearch";

function Home(){
  return(
    <section>
      <UsersSearch/>
      <UsersList/>
    </section>
  )
}

export default Home;