import { createContext, useState } from "react";

export type ThemeModeType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeMode = createContext<ThemeModeType | null>(null);

const ThemeModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>("");

  return (
    <ThemeMode.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeMode.Provider>
  );
};

export default ThemeModeProvider;
