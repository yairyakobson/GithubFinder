export interface RepoProps{
  repo: {
    id: number; // Postman
    description: string;
    forks: number;
    open_issues: number;
    watchers_count: number;
    stargazers_count: number;
    name: string;
    html_url: string; // Postman
  }
  repos: []
}