import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { loginSuccess } from "../features/auth/authSlice";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(loginSuccess({ jwt: "mock-jwt", userId: 1 }));
    navigate("/projects");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <form onSubmit={handleSubmit} className="p-6 space-y-4 w-80 bg-white shadow rounded">
        <h1 className="text-center font-bold text-2xl">Вход</h1>
        <input
          className="w-full border rounded p-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full border rounded p-2"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full py-2 bg-purple-600 text-white rounded">Войти</button>
      </form>
    </div>
  );
};

export default Login;
