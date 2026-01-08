import { StrictMode } from "react";
import { ToastContainer } from "react-toastify";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPizza from "./pages/AllPizza";
import "bootstrap/dist/css/bootstrap.min.css";
import OnePizza from "./pages/OnePizza";
import Cart from "./pages/Cart";
import AddPizza from "./pages/AddPizza";
import EditPizza from "./pages/EditPizza";
import Login from "./pages/Login";
import Orders from "./pages/Orders";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPizza />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/pizzak/:id" element={<OnePizza />} />
        <Route path="/pizzak/hozzaad" element={<AddPizza />} />
        <Route path="/pizzak/szerkeszt/:id" element={<EditPizza />} />
        <Route path="/kosar" element={<Cart />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
    <ToastContainer></ToastContainer>
  </StrictMode>
);
