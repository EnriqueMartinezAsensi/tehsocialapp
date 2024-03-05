import { useEffect, useState } from "react";
import { getComents } from "../coments";
import { getPost } from "../posts";
import { getUser } from "../user";

const usePost = (postID: number) => {
  const [fullPostData, setFullPostData] = useState<CompletePost>();
  const [isLoading, setIsloading] = useState(true);

  const getFullPost = (postID: number) => {
    getPost(Number(postID)).then((postData) => {
      getUser(postData.userId).then((userData) => {
        getComents(postData.id).then((comentData) => {
          const fullPost: CompletePost = {
            post: postData,
            user: userData,
            comentList: comentData,
          };
          setFullPostData(fullPost);
          setIsloading(false);
        });
      });
    });
  };

  useEffect(() => {
    getFullPost(Number(postID));
  }, []);

  return { fullPostData, isLoading };
};

export default usePost;
