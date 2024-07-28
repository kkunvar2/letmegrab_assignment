// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../Services/authService';

const ProtectedRoute = ({ children }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
