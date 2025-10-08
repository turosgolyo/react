import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BmiKalkulator from "./BmiKalkulator.tsx";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bmi" element={<BmiKalkulator />} />
        <Route path="*" element={<h1>404, az oldal nem található</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
