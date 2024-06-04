import ReactDOM from "react-dom/client";
import App from "./routes/App";
import initI18n from "./i18n/i18nConfig";

initI18n();

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
