import { useState, useContext } from "react";
import GitContext from "../../context/github/GitContext";

function UsersSearch(){
  const[text, setText] = useState("");
  const {users, searchUsers, clearUsers} = useContext(GitContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(text === ""){
      alert("Enter Something");
    }
    else{
      searchUsers(text);
      setText("");
    }
  }

  return(
    <div className="grid grid-cols-1
    xl:grid-cols-2
    md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}/>
                <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-360 btn btn-lg">Go</button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={clearUsers} className="btn btn-ghost btn-lg">Clear</button>
      </div>
      )}
    </div>
  );
};
export default UsersSearch