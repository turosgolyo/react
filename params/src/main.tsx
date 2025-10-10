import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Param from "./pages/Param.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/pizzak/:id" element={<Param />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
