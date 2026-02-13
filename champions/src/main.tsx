import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from "./pages/Login.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Champions from "./pages/Champions.tsx";
import OneChampion from "./pages/OneChampion.tsx";
import CreateChampion from "./pages/CreateChampion.tsx";
import EditChampion from "./pages/EditChampion.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/champions" element={<Champions />} />
        <Route path="/champions/:id" element={<OneChampion />} />
        <Route path="/champions/create" element={<CreateChampion />} />
        <Route path="/champions/edit/:id" element={<EditChampion />} />
        <Route path="*" element={<h1>404 nem található oldal</h1>} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>,
);
