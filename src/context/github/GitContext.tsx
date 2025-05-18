import { createContext, useReducer } from "react";

import type { GitContextTypeProps } from "../../interfaces/gitContext/gitContextInterface";
import type { GitProviderProps } from "../../interfaces/gitContext/gitProviderInterface";
import type { GitContextStateProps } from "../../interfaces/gitContext/gitContextStateInterface";

import GitReducer from "./GitReducer";

const GitContext = createContext<GitContextTypeProps | null>(null);

export const GitProvider = ({ children }: GitProviderProps) =>{
  const initialState: GitContextStateProps = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GitReducer, initialState);

  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

  return(
    <GitContext.Provider
      value={{
        ...state,
        dispatch,
        clearUsers
      }}>
      {children}
    </GitContext.Provider>
  );
};

export default GitContext;