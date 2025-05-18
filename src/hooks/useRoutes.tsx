import { Route } from "react-router";

import Home from "../pages/Home";
import Error from "../pages/Error";
import User from "../pages/User";

const useRoutes = () =>{
  return(
    <>
      <Route path="/" element={<Home/>}/>
      <Route path="/user/:login" element={<User/>}/>
      <Route path="*" element={<Error/>}/>
    </>
  )
}

export default useRoutes;