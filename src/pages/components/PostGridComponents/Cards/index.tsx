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
  TextGlobeHolder,
} from "./Cards.style";
import TextGlobe from "../../../../assets/components/svg/textGlobe";

type CardsProps = {
  post: PostData;
  user: UserData;
  comentCount?: number;
};

//https://www.facebook.com/

const Cards = ({ post, user, comentCount }: CardsProps) => {
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
      <TextGlobeHolder>
        <TextGlobe />
        {comentCount}
      </TextGlobeHolder>
    </FullCard>
  );
};

export default Cards;
