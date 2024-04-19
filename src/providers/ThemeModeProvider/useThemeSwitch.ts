import { useContext } from "react";
import { ThemeModeType, ThemeMode } from ".";

const useThemeSwitch = () => {
  return useContext(ThemeMode) as ThemeModeType;
};

export default useThemeSwitch;
