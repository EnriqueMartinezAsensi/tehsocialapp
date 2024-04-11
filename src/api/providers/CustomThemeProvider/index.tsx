import drakTheme from "../../../theme/darkTheme";
import lightTheme from "../../../theme/lightTheme";
import useThemeContext from "../ThemeModeProvider/useThemeSwitch";
import { ThemeProvider } from "styled-components";

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeContext();

  const selectedTheme = () => {
    if (theme === "darkTheme") return drakTheme;
    return lightTheme;
  };

  return <ThemeProvider theme={selectedTheme()}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
