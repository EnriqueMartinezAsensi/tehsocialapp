import CustomThemeProvider from "../providers/CustomThemeProvider";
import ReactQueryProvider from "../providers/ReactQueryProvider";
import ThemeModeProvider from "../providers/ThemeModeProvider";
import { ToastProvider } from "../providers/ToastProvider/ToastContext";
import GlobalStyles from "../theme/GlobalStyles";

import AppRoutes from "./AppRoutes";

export default function Root() {
  return (
    <ReactQueryProvider>
      <ThemeModeProvider>
        <CustomThemeProvider>
          <ToastProvider>
            <AppRoutes />
          </ToastProvider>
          <GlobalStyles />
        </CustomThemeProvider>
      </ThemeModeProvider>
    </ReactQueryProvider>
  );
}
