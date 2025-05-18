import axios from "axios";

const GIT_URL = import.meta.env.REACT_APP_GIT_URL;
const GIT_TOKEN = import.meta.env.REACT_APP_GIT_TOKEN;

const github = axios.create({
  baseURL: GIT_URL,
  headers: { Authorization: `token ${GIT_TOKEN}` },
});

// Getting users from the API
export const searchUsers = async(text: string) =>{
  const params = new URLSearchParams({ q: text });
  const response = await github.get(`/search/users?${params}`)
  return response.data.items;
};

export const getUserInfo = async(login: string | undefined) =>{
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data }
};