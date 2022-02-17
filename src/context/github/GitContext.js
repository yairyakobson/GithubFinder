import { createContext, useReducer } from "react";
import GitReducer from './GitReducer';

const GitContext = createContext();

const GIT_URL = process.env.REACT_APP_GIT_URL
const GIT_TOKEN = process.env.REACT_APP_GIT_TOKEN

export const GitProvider = ({children}) =>{
  const initialState = {
    users: [],
    loading: false
  }
  const [state, dispatch] = useReducer(GitReducer, initialState);

  // Getting users from the API
  const searchUsers = async (text) =>{
    setLoading();
    clearUsers();

    const params = new URLSearchParams({
      q: text
    })
    const response = await fetch(`${GIT_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GIT_TOKEN}`,
      },
    });
    const {items} = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  }
  const clearUsers = () => dispatch({type: "CLEAR_USERS"});
  const setLoading = () => dispatch({type: "SET_LOADING"});

    return(
      <GitContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}>
        {children}
      </GitContext.Provider>
    )
};
export default GitContext;