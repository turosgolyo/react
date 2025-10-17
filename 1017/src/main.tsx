import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NewPizza from "./pages/NewPizza.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NewPizza />
  </StrictMode>
);
