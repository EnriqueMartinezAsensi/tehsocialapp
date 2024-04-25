import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com";

export const getComents = (postID: number | undefined) => {
  return axios
    .get<ComentData[]>(`${URL}/posts/${postID}/comments`)
    .then(({ data }) => data);
};
