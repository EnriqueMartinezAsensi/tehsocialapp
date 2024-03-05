import FullPostRender from "../components/PostDetailedComponents/index";
import { getPost } from "../../api/posts";
import { getUser } from "../../api/user";
import { getComents } from "../../api/coments";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../assets/components/svg/spinner";
import "./styles.css";

const PostDetailed = () => {
  const [fullPostData, setFullPostData] = useState<CompletePost>();
  const [isLoading, setIsloading] = useState(true);
  const { postID } = useParams();

  const GetFullPost = (postID: number) => {
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
    GetFullPost(Number(postID));
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="facepost">
      <FullPostRender post={fullPostData!} />
    </div>
  );
};

export default PostDetailed;
