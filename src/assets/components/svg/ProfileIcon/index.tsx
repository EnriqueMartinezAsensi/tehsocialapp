import { ProfileIconStyled } from "./ProfileIcon.styled";

type ProfileIconProps = {
  size: number;
};

const ProfileIcon = ({ size }: ProfileIconProps) => {
  return (
    <ProfileIconStyled
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      size={size}
    >
      <circle cx="16" cy="16" r="16" fill="#666" />
      <path
        d="M12.73 13.1a3.271 3.271 0 1 1 3.27 3.2 3.237 3.237 0 0 1-3.27-3.2zm-2.73 9.069h1.088a4.91 4.91 0 0 1 9.818 0h1.094a5.884 5.884 0 0 0-3.738-5.434 4.238 4.238 0 0 0 2.1-3.635 4.366 4.366 0 0 0-8.73 0 4.238 4.238 0 0 0 2.1 3.635 5.878 5.878 0 0 0-3.732 5.434z"
        fill="#eee"
      />
      <path fill="none" d="M0 0h32v32h-32z" />
    </ProfileIconStyled>
  );
};

export default ProfileIcon;