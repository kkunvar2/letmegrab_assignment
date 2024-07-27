import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import LandingPage from './components/LandingPage/LandingPage';
import Product from './components/Product';
import Update from './components/Update';
import Carousal from './components/LandingPage/Carousal';
import ProtectedRoute from './Services/ProtectedRoute';
import Create from './components/Create';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />

        <Route path="/carousal" element={<Carousal />} />
        
        {/* Protected Routes */}
        <Route path="/create" element={<ProtectedRoute><Create /></ProtectedRoute>} />
        <Route path="/product" element={<ProtectedRoute><Product /></ProtectedRoute>} />
        <Route path="/update/:id" element={<ProtectedRoute><Update /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
