import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllPizza from './pages/AllPizza'
import { ToastContainer } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllPizza />}/>
        <Route path='*' element={<h1>404, nem található oldal</h1>}/>
      </Routes>
    </BrowserRouter>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
