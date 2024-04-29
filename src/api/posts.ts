import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com";

export const getAllPostsList = async () => {
  return axios.get<PostData[]>(`${URL}/posts`).then(({ data }) => data);
};

export const getPaginatedPostsList = async (page: number, postsPerPage: string) => {
  return axios
    .get<PostData[]>(`${URL}/posts`, {
      params: { _page: page, _limit: postsPerPage },
    })
    .then(({ data }) => data);
};

export const getPost = async (postID: number) => {
  return axios.get<PostData>(`${URL}/posts/${postID}`).then(({ data }) => data);
};

export const postNewPost = (post: PostData) => {
  return axios.post<PostData>(`${URL}/posts`, post).then(({ data }) => data);
};
