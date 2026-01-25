import "./styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./routes/routes.tsx";
import { GlobalProvider } from "./GlobalProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider>
      <AppRouter />
    </GlobalProvider>
  </StrictMode>,
);
