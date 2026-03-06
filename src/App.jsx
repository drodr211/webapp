import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Dashboard from './pages/dash';
import Register from './pages/register';
import Home from './pages/home';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          {/* Register */}
          <Route path="/register" element={<Register />} />
          {/* Login */}
          <Route path="/login" element={<Login />} />
          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;