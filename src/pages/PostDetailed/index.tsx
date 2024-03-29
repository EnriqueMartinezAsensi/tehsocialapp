import FullPostRender from "../components/PostDetailedComponents/FullPost/index";
import { useParams } from "react-router-dom";
import Spinner from "../../assets/components/svg/spinner";
import usePost from "../../api/hooks/usePost";
import { PostDetailedHolder } from "./PostDetailed.styled";

const PostDetailed = () => {
  const { postID } = useParams();
  const { fullPostData, isLoading } = usePost(Number(postID));

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <PostDetailedHolder>
      <FullPostRender post={fullPostData!} />
    </PostDetailedHolder>
  );
};

export default PostDetailed;
