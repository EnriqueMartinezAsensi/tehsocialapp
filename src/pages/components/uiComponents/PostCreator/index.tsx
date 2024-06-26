import { useState } from "react";
import ProfileIcon from "../../../../assets/components/svg/ProfileIcon/index";

import {
  NewPostHolder,
  SendButton,
  TextAreaHolder,
  TextInput,
  UserName,
} from "./PostCreator.styled";
import { postNewPost } from "../../../../api/posts";
import { useToasts } from "../../../../providers/ToastProvider/ToastContext/useToasts";

const PostCreator = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [newPostText, setNewPostText] = useState<string>("");
  const isDisplayed = isFocused || !!newPostText;
  const userID = 11;
  const [newPostUploaded, setNewPostUploaded] = useState<PostData>();
  const { createToast } = useToasts();

  const sendPost = () => {
    const post: PostData = {
      userId: userID,
      body: newPostText,
    };
    postNewPost(post).then((postedPost) => {
      setNewPostUploaded(postedPost);
      setNewPostText("");
      setIsFocused(false);
      createToast("Message posted.", "success", 4000);
    });
  };

  console.log(newPostUploaded);

  return (
    <NewPostHolder
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      $isDisplayed={isDisplayed}
    >
      <div>
        <ProfileIcon size={35} />
      </div>
      <TextAreaHolder>
        {isDisplayed ? <UserName>Enrique Martinez</UserName> : null}
        <TextInput
          placeholder="¿En qué estás pensando?"
          onChange={({ target }) => setNewPostText(target.value)}
          value={newPostText}
        />
      </TextAreaHolder>
      {isDisplayed ? <SendButton onClick={sendPost}>Send</SendButton> : null}
    </NewPostHolder>
  );
};

export default PostCreator;
function useToast(): { createToast: any } {
  throw new Error("Function not implemented.");
}
