import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { loginSuccess } from "../features/auth/authSlice";
import { AtSign, Lock } from "lucide-react";

// — универсальный инпут с иконкой слева
const Input: React.FC<
    React.InputHTMLAttributes<HTMLInputElement> & { icon: React.ReactNode }
> = ({ icon, ...props }) => (
    <div className="relative">
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
      {icon}
    </span>
      <input
          {...props}
          className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
      />
    </div>
);

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: заменить на реальный /api/auth/login
    dispatch(loginSuccess({ jwt: "mock-jwt", userId: 1 }));
    navigate("/projects");
  }

  return (
      <div className="min-h-screen bg-gradient-to-b from-[#f0f3ff] to-white flex flex-col items-center">
        {/* ---------- логотип ---------- */}
        <img src="/logo.svg" alt="logo" className="mt-8 w-32" />

        {/* ---------- форма ---------- */}
        <form
            onSubmit={handleSubmit}
            className="mt-10 w-[420px] bg-white/60 backdrop-blur rounded-2xl p-10 shadow-lg space-y-5"
        >
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-2xl font-semibold">Вход</h2>
            <Link
                to="/forgot"
                className="text-sm text-purple-400 hover:text-purple-500 underline"
            >
              Забыли пароль?
            </Link>
          </div>

          <Input
              icon={<AtSign size={18} />}
              type="email"
              placeholder="Электронная почта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          />

          <Input
              icon={<Lock size={18} />}
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
          />

          <button
              className="w-full py-3 rounded-xl bg-[#6b7bff] text-white text-lg font-medium hover:bg-[#5766e6] transition"
              type="submit"
          >
            Войти
          </button>

          <div className="text-center text-gray-500 text-sm mt-6">
            или войдите через
          </div>

          {/* ---------- соц-кнопки ---------- */}
          <div className="flex gap-4">
            <button
                type="button"
                className="flex-1 py-3 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200"
            >
              <img src="/yandex.svg" alt="yandex" className="w-8 h-8" />
            </button>
            <button
                type="button"
                className="flex-1 py-3 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200"
            >
              <img src="/vk.svg" alt="vk" className="w-8 h-8" />
            </button>
          </div>

          <div className="text-center text-sm text-gray-500 mt-6">
            У вас ещё нет аккаунта?{" "}
            <Link to="/register" className="text-purple-600 hover:underline">
              Зарегистрируйтесь бесплатно
            </Link>
          </div>
        </form>

        {/* ---------- футер-текст ---------- */}
        <p className="mt-10 w-[420px] text-center text-xs text-gray-400 leading-snug">
          Используя WEEEK, Вы подтверждаете, что прочитали и&nbsp;поняли,
          а&nbsp;также соглашаетесь с&nbsp;Правилами &amp; Условиями
          и&nbsp;Политикой конфиденциальности.
        </p>

        {/* ---------- переключатель языка ---------- */}
        <button className="mt-4 mb-6 px-4 py-1 rounded-xl border text-gray-500 text-sm">
          RU
        </button>
      </div>
  );
};

export default Login;
