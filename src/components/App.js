import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Leads from "./Leads";
import Cancelled from "./Cancelled";
import Sold from "./Sold";
import Deleted from "./Deleted";
import { useDispatch } from "react-redux";
import { setLeads } from "../redux/crm/slice";
import { data } from "../data";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/firebaseConfig";

const App = () => {
  initializeApp(firebaseConfig);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLeads(data));
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/cancelled" element={<Cancelled />} />
        <Route path="/sold" element={<Sold />} />
        <Route path="/deleted" element={<Deleted />} />
      </Routes>
    </div>
  );
};
export default App;
