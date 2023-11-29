import { useState, useContext } from "react";

import { searchUsers } from "../../context/github/GitActions";
import AlertContext from "../../context/alert/AlertContext";
import GitContext from "../../context/github/GitContext";


function UsersSearch(){
  const [text, setText] = useState("");

  const { setAlert } = useContext(AlertContext);
  const { users, dispatch } = useContext(GitContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(text === ""){
      setAlert("Enter Something", "error");
    }
    else{
      dispatch({ type: "SET_LOADING" })
      const users = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: users });
      
      setText("");
    }
  }

  return(
    <div className="grid grid-cols-1
    md:grid-cols-2
    xl:grid-cols-1">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input type="text"
              className="outline-transparent w-full pr-40 bg-gray-200 input-lg text-black"
              placeholder="Search"
              value={text}
              onChange={handleChange}/>

              <button type="submit"
              className="absolute top-0 right-0 rounded-l-none w-360 btn btn-lg">Go</button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
      <div>
        <button onClick={() => dispatch({ type: "CLEAR_USERS" })}
        className="btn btn-ghost btn-lg">Clear</button>
      </div>
      )}
    </div>
  );
};
export default UsersSearch;