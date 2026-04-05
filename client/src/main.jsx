import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/client">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<div>About page</div>} />
        <Route path="/contact" element={<div>Contact Us page</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);