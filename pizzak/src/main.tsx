import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pizzak from "./pages/Pizzak";
import PizzaId from "./pages/PizzaId";
import CreatePizza from "./pages/CreatePizza";
import EditPizza from "./pages/EditPizza";
import { Slide, ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/pizzak" element={<Pizzak />} />
        <Route path="/pizzak/:id" element={<PizzaId />} />
        <Route path="/pizzak/letrehoz" element={<CreatePizza />} />
        <Route path="/pizzak/szerkeszt/:id" element={<EditPizza />} />
      </Routes>
    </BrowserRouter>

    <ToastContainer
      position="top-center"
      theme="colored"
      limit={5}
      transition={Slide}
      hideProgressBar={true}
      draggable={true}
    />
  </StrictMode>
);
