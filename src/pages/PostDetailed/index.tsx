import FullPostRender from "../components/PostDetailedComponents/index";
import { useParams } from "react-router-dom";
import Spinner from "../../assets/components/svg/spinner";
import "./styles.css";
import usePost from "../../api/hooks/usePost";

const PostDetailed = () => {
  const { postID } = useParams();
  const { fullPostData, isLoading } = usePost(Number(postID));

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="facepost">
      <FullPostRender post={fullPostData!} />
    </div>
  );
};

export default PostDetailed;
