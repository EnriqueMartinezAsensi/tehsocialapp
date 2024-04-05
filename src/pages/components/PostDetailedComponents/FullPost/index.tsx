import { useNavigate } from "react-router-dom";
import PostComment from "../PostComment";
import UserIcon from "../../../../assets/images/ProfileIcon.svg";
import Arrow from "../../../../assets/components/svg/arrow";
import { useTheme } from "styled-components";

import {
  BackButton,
  FullPostHeader,
  UserIconStyle,
  BodyHolder,
  PostTitle,
  PostUser,
  PostBody,
  LikesBars,
  CommentSectionHolder,
  CommentSectionTitle,
} from "./FullPost.styled";

type FullPostRenderProps = {
  post: CompletePost;
};

//https://www.facebook.com/aurelio.beutblasco/posts/2622048241290105

const FullPostRender = ({ post }: FullPostRenderProps) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <section>
      <FullPostHeader>
        <UserIconStyle src={UserIcon} />
        <PostTitle>{post.post.title}</PostTitle>
        <PostUser>{post.user.name}</PostUser>
        <BackButton onClick={() => navigate(`/`)}>
          <Arrow angle={180} size={25} color={theme.colors.secondary.main} />
        </BackButton>
      </FullPostHeader>
      <BodyHolder>
        <PostBody>{post.post.body}</PostBody>
      </BodyHolder>
      <LikesBars></LikesBars>
      <LikesBars></LikesBars>
      <CommentSectionHolder>
        <CommentSectionTitle>View more coments</CommentSectionTitle>
        {post.comentList.map((eachComent) => (
          <PostComment key={eachComent.id} line={eachComent} />
        ))}
      </CommentSectionHolder>
    </section>
  );
};

export default FullPostRender;
