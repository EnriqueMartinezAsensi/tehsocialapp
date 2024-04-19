import { useNavigate } from "react-router-dom";
import UserIcon from "../../../../assets/images/ProfileIcon.svg";
import {
  CardBody,
  CardHeader,
  CardLikeLine,
  CardTitle,
  CardUserName,
  FullCard,
  ProfileIcon,
} from "./Cards.style";

type CardsProps = {
  post: PostData;
  user: UserData;
};

//https://www.facebook.com/

const Cards = ({ post, user }: CardsProps) => {
  const navigate = useNavigate();
  return !post || !user ? (
    <div></div>
  ) : (
    <FullCard onClick={() => navigate(`/post/${post.id}`)}>
      <CardHeader>
        <ProfileIcon src={UserIcon} />
        <CardTitle>{post!.title}</CardTitle>
        <CardUserName>{user!.name}</CardUserName>
      </CardHeader>
      <CardBody>{post.body}</CardBody>
      <CardLikeLine></CardLikeLine>
    </FullCard>
  );
};

export default Cards;
