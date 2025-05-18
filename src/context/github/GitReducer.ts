import type { GitContextStateProps } from "../../interfaces/gitContext/gitContextStateInterface";
import type { GitAction } from "../../types/gitTypes";

// Reducer
const GitReducer = (state: GitContextStateProps, action: GitAction): GitContextStateProps =>{
  switch(action.type){
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case "GET_USER_AND_REPOS":
      return{
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };

    case "SET_LOADING":
      return{
        ...state,
        loading: true,
      };

    case "CLEAR_USERS":
      return{
        ...state,
        users: [],
      };

    default:
      return state;
  }
};

export default GitReducer;