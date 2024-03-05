import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com";

export const getPostsList = async () => {
  return axios.get<PostData[]>(`${URL}/posts`).then(({ data }) => data);
};

export const getPost = async (postID: number) => {
  return axios.get<PostData>(`${URL}/posts/${postID}`).then(({ data }) => data);
};
