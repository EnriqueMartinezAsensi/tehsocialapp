import axios from "axios";

//const URL = "https://jsonplaceholder.typicode.com";
const URL = "http://localhost:3000";

export const getComents = (postID: string) => {
  return axios.get<ComentData[]>(`${URL}/coments/${postID}`).then(({ data }) => data);
};

export const getComentCount = (postIds: string[]) => {
  return axios.get<CommentCount[]>(`${URL}/coments/`, { params: { id: postIds } }).then(({ data }) => data);
};
