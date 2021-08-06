import apiClient from "./client";

export type GithubProfile = {
  avatar_url: string;
  bio: string;
  login: string;
  name: string;
  followers : number
  following: number
  public_repos: number
};


export const getGithubProfile = async () => {
  const response = await apiClient.get<GithubProfile>("https://api.github.com/users/merturl");
  return response.data;
};
