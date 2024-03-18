import GlobalStyles from "../theme/GlobalStyles";
import AppRoutes from "./AppRoutes";

export default function Root() {
  return (
    <>
      <AppRoutes />
      <GlobalStyles />
    </>
  );
}
