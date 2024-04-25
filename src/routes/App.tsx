import { CardProvider } from "../providers/CardProvider";
import CustomThemeProvider from "../providers/CustomThemeProvider";
import { PostsProvider } from "../providers/PostProvider";
import ThemeModeProvider from "../providers/ThemeModeProvider";
import { ToastProvider } from "../providers/ToastProvider/ToastContext";
import GlobalStyles from "../theme/GlobalStyles";

import AppRoutes from "./AppRoutes";

export default function Root() {
  return (
    <ThemeModeProvider>
      <CustomThemeProvider>
        <ToastProvider>
          <PostsProvider>
            <CardProvider>
              <AppRoutes />
            </CardProvider>
          </PostsProvider>
        </ToastProvider>
        <GlobalStyles />
      </CustomThemeProvider>
    </ThemeModeProvider>
  );
}
