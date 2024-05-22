import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import HomePage from "../pages/home/HomePage";

const Router = () => {
  return (
    <div>
        <Routes>
          <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register />}   />
        </Routes>
    </div>
  );
};

export default Router;
