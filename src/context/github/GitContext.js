import { createContext, useReducer } from "react";

import GitReducer from "./GitReducer";

const GitContext = createContext();

export const GitProvider = ({ children }) =>{
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }
  const [state, dispatch] = useReducer(GitReducer, initialState);

  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

    return(
      <GitContext.Provider value={{
        ...state,
        dispatch,
        clearUsers,
      }}>
        {children}
      </GitContext.Provider>
    );
};

export default GitContext;