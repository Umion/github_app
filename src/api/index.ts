import { defHttp } from "../utils/axios";
import { UsersResponseModel } from "./models";

enum Api {
  GET_USER = "/users",
}

export const apiGetToken = (username: string): Promise<UsersResponseModel> => {
  return defHttp.get(`${Api.GET_USER}/${username}`);
};
