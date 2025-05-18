import React, { useState, use } from "react";
import { toast } from "sonner";

import type { GitContextTypeProps } from "../../interfaces/gitContext/gitContextInterface";
import { searchUsers } from "../../context/github/GitActions";

import GitContext from "../../context/github/GitContext";

function UsersSearch(){
  const [text, setText] = useState("");

  const { users, dispatch } = use(GitContext) as GitContextTypeProps;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if(text === ""){
      toast.error("Enter Something");
    }
    else{
      dispatch({ type: "SET_LOADING" })
      const users = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: users });
      
      setText("");
    }
  }

  return(
    <section className="grid grid-cols-1
    md:grid-cols-2
    xl:grid-cols-1">
      <section>
        <form onSubmit={handleSubmit}>
          <section className="form-control">
            <section className="relative">
              <input type="text"
              className="outline-transparent w-full pr-40 bg-gray-200 input-lg text-black"
              placeholder="Search"
              value={text}
              onChange={handleChange}/>

              <button type="submit"
              className="absolute top-0 right-0 rounded-l-none w-360 btn btn-lg">Go</button>
            </section>
          </section>
        </form>
      </section>
      {users.length > 0 && (
      <section>
        <button onClick={() => dispatch({ type: "CLEAR_USERS" })}
        className="btn btn-ghost btn-lg">Clear</button>
      </section>
      )}
    </section>
  );
}
export default UsersSearch;