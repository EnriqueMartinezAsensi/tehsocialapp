import { useState } from "react";
import ProfileIcon from "../../../../assets/components/svg/ProfileIcon/index";

import { NewPostHolder, SendButton, TextAreaHolder, TextInput, TitleInput, UserName } from "./PostCreator.styled";

import { useToasts } from "../../../../providers/ToastProvider/ToastContext/useToasts";
import useUploadPost from "../../../../api/hooks/useUploadPost";
import { useTranslation } from "react-i18next";

const PostCreator = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [newPostText, setNewPostText] = useState<string>("");
  const [newPostTitle, setNewPostTitle] = useState<string>("");
  const isDisplayed = isFocused || !!newPostText;
  const userID = "66336ddc9fd43539291a60b8";
  const { createToast } = useToasts();
  const { mutateAsync } = useUploadPost();
  const { t } = useTranslation();

  const sendPost = () => {
    if (newPostTitle === "" || newPostText === "") {
      createToast("Faltan campos.", "warning", 3000);
    } else {
      const post: PostData = {
        userId: userID,
        title: newPostTitle,
        body: newPostText,
      };
      mutateAsync(post)
        .then(() => {
          createToast("Message posted.", "success", 4000);
          setNewPostText("");
          setNewPostTitle("");
          setIsFocused(false);
        })
        .catch(() => createToast("Error uploading.", "error", 4000));
    }
  };

  return (
    <NewPostHolder onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} $isDisplayed={isDisplayed}>
      <div>
        <ProfileIcon size={35} />
      </div>
      <TextAreaHolder>
        {isDisplayed ? <UserName>Ervin Howell</UserName> : null}
        {isDisplayed ? (
          <TitleInput
            placeholder={t("title")}
            onChange={({ target }) => setNewPostTitle(target.value)}
            value={newPostTitle}
          ></TitleInput>
        ) : null}
        <TextInput
          placeholder={t("post-sentence")}
          onChange={({ target }) => setNewPostText(target.value)}
          value={newPostText}
        />
      </TextAreaHolder>
      {isDisplayed ? <SendButton onClick={sendPost}>Send</SendButton> : null}
    </NewPostHolder>
  );
};

export default PostCreator;
/*function useToast(): { createToast: any } {
  throw new Error("Function not implemented.");
}*/
