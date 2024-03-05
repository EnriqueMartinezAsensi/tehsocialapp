import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com";

export const getUsersList = (userList: number[]) => {
  return axios
    .get<UserData[]>(`${URL}/users`, { params: { id: userList } })
    .then(({ data }) => data);
};

export const getUser = (userID: number) => {
  return axios.get<UserData>(`${URL}/users/${userID}`).then(({ data }) => data);
};

export const getAllUsers = () => {
  return axios.get<UserData[]>(`${URL}/users`).then(({ data }) => data);
};
