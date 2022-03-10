import React from "react";
import { Routes, Route } from "react-router-dom";
import { firebaseConfig } from "../firebase/firebaseConfig";
import { initializeApp } from "firebase/app";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Leads from "./Leads";
import Cancelled from "./Cancelled";
import Sold from "./Sold";
import Deleted from "./Deleted";
import ErrorPage from "./pages/ErrorPage";
import RequireAuth from "./RequireAuth";

const App = () => {
  initializeApp(firebaseConfig);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/leads"
          element={
            <RequireAuth>
              <Leads />
            </RequireAuth>
          }
        />
        <Route
          path="/cancelled"
          element={
            <RequireAuth>
              <Cancelled />
            </RequireAuth>
          }
        />
        <Route
          path="/sold"
          element={
            <RequireAuth>
              <Sold />
            </RequireAuth>
          }
        />
        <Route
          path="/deleted"
          element={
            <RequireAuth>
              <Deleted />
            </RequireAuth>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
export default App;
