import CustomThemeProvider from "../api/providers/CustomThemeProvider";
import ThemeModeProvider from "../api/providers/ThemeModeProvider";
import GlobalStyles from "../theme/GlobalStyles";

import AppRoutes from "./AppRoutes";

export default function Root() {
  return (
    <ThemeModeProvider>
      <CustomThemeProvider>
        <AppRoutes />
        <GlobalStyles />
      </CustomThemeProvider>
    </ThemeModeProvider>
  );
}
