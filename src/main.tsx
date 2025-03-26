import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n";
import { ThemeProvider } from "./context/ThemeContext";
import General from "./pages/General";
import SocialNetworks from "./components/SocialNetworks";
import "devicon/devicon.min.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <SocialNetworks></SocialNetworks>
        <General />
      </ThemeProvider>
    </I18nextProvider>
  </StrictMode>
);
