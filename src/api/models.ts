interface DefaultResponseModel {
  [key: string]: any;
}

export interface UsersResponseModel extends DefaultResponseModel {
  data: UsersResponseDataModel;
}

export interface UsersResponseDataModel {
  avatar_url: string;
  bio: null | string;
  blog: null | string;
  company: null | string;
  created_at: Date;
  email: null | string;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: any;
  html_url: string;
  id: number;
  location: null | string;
  login: string;
  name: null | string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: null | string;
  type: string;
  updated_at: Date;
  url: string;
}
