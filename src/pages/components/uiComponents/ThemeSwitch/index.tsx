import _default from "styled-components/dist/utils/createWarnTooManyClasses";
import useThemeSwitch from "../../../../api/providers/ThemeModeProvider/useThemeSwitch";
import { ThemeSwitchStyled } from "./ThemeSwitch.styled";

const ThemeSwitch = () => {
  const { theme, setTheme } = useThemeSwitch();

  const switchTheme = () => {
    if (theme === "darkTheme") setTheme("lightTheme");
    else setTheme("darkTheme");
  };
  return <ThemeSwitchStyled onClick={switchTheme}>T</ThemeSwitchStyled>;
};

export default ThemeSwitch;
