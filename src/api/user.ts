import axios from "axios";

//const URL = "https://jsonplaceholder.typicode.com";
const URL = "http://localhost:3000";

export const getUsersList = (userList: string[]) => {
  return axios.get<UserData[]>(`${URL}/users`, { params: { id: userList } }).then(({ data }) => data);
};

export const getUser = (userID: string) => {
  return axios.get<UserData>(`${URL}/users/${userID}`).then(({ data }) => data);
};

export const getAllUsers = () => {
  return axios.get<UserData[]>(`${URL}/users`).then(({ data }) => data);
};
