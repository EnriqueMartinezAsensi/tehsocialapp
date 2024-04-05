import { ThemeProvider } from "styled-components";
import GlobalStyles from "../theme/GlobalStyles";
import theme from "../theme/theme";
import AppRoutes from "./AppRoutes";

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <GlobalStyles />
    </ThemeProvider>
  );
}
