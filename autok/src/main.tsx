import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCars from "./pages/AllCars";
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllCars/>}/>
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
);
