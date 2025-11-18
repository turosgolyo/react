import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import OneCar from "./pages/OneCar.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/auto/:id" element={<OneCar />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
