import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n";
import { ThemeProvider } from "./context/ThemeContext";
import SocialNetworks from "./components/SocialNetworks";
import "devicon/devicon.min.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import General from "./pages/General";
import MyFinance from "./pages/projects/MyFinance";
import NotFound from "./pages/NotFound";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <SocialNetworks></SocialNetworks>
        <Router>
          <Routes>
            <Route path="/" element={<General />} />
            <Route path="/myfinance" element={<MyFinance />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </I18nextProvider>
  </StrictMode>
);
