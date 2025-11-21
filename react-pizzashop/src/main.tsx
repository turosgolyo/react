import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Pages/Main.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
