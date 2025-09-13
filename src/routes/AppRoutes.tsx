



import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import HomePage from "../components/HomePage";

const AppRoutes: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {}
        <Route
          path="/"
          element={
            user ? <Navigate to="/home" replace /> : <Navigate to="/auth/login" replace />
          }
        />

        {}
        <Route
          path="/auth/login"
          element={!user ? <LoginForm setUser={setUser} /> : <Navigate to="/home" replace />}
        />

        {/* Home Page (protected) */}
        <Route
          path="/home"
          element={user ? <HomePage setUser={setUser} /> : <Navigate to="/auth/login" replace />}
        />

        {/* Catch-all → redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
