import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const baseURL = "https://api.github.com/"; // keep in .ENV

export const defHttp = axios.create({ baseURL });

defHttp.defaults.headers.common = {
  Accept: "application/json",
};

const requestHandler = async (config: InternalAxiosRequestConfig<any>) => {
  // check auth
  // set auth token
  return config;
};

const responseHandler = (response: AxiosResponse<any, any>) => {
  return response;
};

const errorHandler = async (error: any) => {
  // if (error.response.status === 401)
  // if error, remove session
  // redirect to login

  return Promise.reject(error);
};

defHttp.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

defHttp.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default defHttp;
