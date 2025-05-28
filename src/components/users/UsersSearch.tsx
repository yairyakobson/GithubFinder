import React, { useRef, useState } from "react";
import { toast } from "sonner";

import type { GithubUserProps } from "../../interfaces/user/githubUserInterface";
import { useLazySearchUsersQuery } from "../../redux/api/services/githubApi";

import UsersList from "./UsersList";

function UsersSearch(){
  const inputRef = useRef<HTMLInputElement>(null);
  const [users, setUsers] = useState<GithubUserProps[]>([]);

  const [triggerSearch, { isFetching }] = useLazySearchUsersQuery();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    const text = inputRef.current?.value.trim() ?? "";

    if(text === ""){
      toast.error("Enter Something");
      return;
    }

    try{
      const result = await triggerSearch(text).unwrap();
      setUsers(result);

      if(inputRef.current){ // Clear input after submit
        inputRef.current.value = "";
      }
    }
    catch(error){
      toast.error("Failed to fetch users");
    }
  }

  const handleClear = () =>{
    setUsers([]);
  };

  return(
    <section className="grid grid-cols-1">
      <form onSubmit={handleSubmit}>
        <section className="form-control">
          <section className="flex">
            <input type="text"
            className="w-full outline-transparent p-[0.7rem]
            bg-gray-200 input-lg text-black mb-5"
            placeholder="Search"
            ref={inputRef}/>

            {users?.length > 0 ? (
              <button type="button"
              key="clear"
              onClick={handleClear}
              className="btn btn-lg rounded-l-none">Clear
              </button>
            ) : (
              <button type="submit"
              key="go"
              className="btn btn-lg rounded-l-none"
              disabled={isFetching}
              >{isFetching ? "Loading..." : "Go"}
              </button>
            )}
          </section>
          <UsersList users={users} isLoading={isFetching}/>
        </section>
      </form>
    </section>
  );
};

export default UsersSearch;