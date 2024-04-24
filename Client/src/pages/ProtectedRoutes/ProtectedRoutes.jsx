import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export function ProtectedRoutes() {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated)
    return <Navigate to="/login" replace />;

  return <Outlet />;
}
