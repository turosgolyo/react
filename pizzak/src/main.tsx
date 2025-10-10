import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Pizza from './Pizza.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/pizzak" element={<App />} />
                <Route path="/pizzak/:id" element={<Pizza />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
