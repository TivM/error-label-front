import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import CreateProject from "./pages/CreateProject";

const App: React.FC = () => (
    <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projects" element={<Dashboard />} />
        <Route path="/projects/create" element={<CreateProject />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="*" element={<div>Not Found</div>} />
    </Routes>
);
export default App;