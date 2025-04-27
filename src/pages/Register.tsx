// src/pages/Register.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { loginSuccess } from "../features/auth/authSlice";
import { User, AtSign, Lock } from "lucide-react";

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

const Register: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChange =
      (field: keyof typeof form) =>
          (e: React.ChangeEvent<HTMLInputElement>) =>
              setForm({ ...form, [field]: e.target.value });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: call real /api/auth/register
    dispatch(loginSuccess({ jwt: "mock", userId: 1 }));
    navigate("/projects");
  }

  return (
      <div className="min-h-screen bg-gradient-to-b from-[#f0f3ff] to-white flex flex-col items-center">
        {/* logo */}
        <img src="/logo.svg" alt="logo" className="mt-8 w-32" />

        {/* ---------- ФОРМА ---------- */}
        <form
            onSubmit={handleSubmit}
            className="mt-10 w-[420px] bg-white/60 backdrop-blur rounded-2xl p-10 shadow-lg space-y-5"
        >
          <h2 className="text-2xl font-semibold mb-2">Создайте аккаунт</h2>

          {/* Имя + Фамилия */}
          <div className="flex gap-4">
            <Input
                icon={<User size={18} />}
                placeholder="Имя"
                value={form.name}
                onChange={onChange("name")}
                required
            />
            <Input
                icon={<User size={18} />}
                placeholder="Фамилия"
                value={form.surname}
                onChange={onChange("surname")}
                required
            />
          </div>

          <Input
              icon={<AtSign size={18} />}
              type="email"
              placeholder="Электронная почта"
              value={form.email}
              onChange={onChange("email")}
              required
          />

          <Input
              icon={<Lock size={18} />}
              type="password"
              placeholder="Пароль"
              value={form.password}
              onChange={onChange("password")}
              required
          />

          <button
              className="w-full py-3 rounded-xl bg-[#6b7bff] text-white text-lg font-medium hover:bg-[#5766e6] transition"
              type="submit"
          >
            Создать аккаунт
          </button>

          {/* разделитель */}
          <div className="text-center text-gray-500 text-sm mt-6">
            или войдите через
          </div>

          <div className="flex gap-4">
            <button
                type="button"
                className="flex-1 py-3 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200"
            >
              <img src="/yandex.svg" alt="yandex" className="w-5 h-5" />
            </button>
            <button
                type="button"
                className="flex-1 py-3 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200"
            >
              <img src="/vk.svg" alt="vk" className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center text-sm text-gray-500 mt-6">
            Уже зарегистрированы?{" "}
            <Link to="/login" className="text-purple-600 hover:underline">
              Войти в аккаунт
            </Link>
          </div>
        </form>
        {/* ---------- /ФОРМА ---------- */}

        <p className="mt-10 w-[420px] text-center text-xs text-gray-400 leading-snug">
          Используя WEEEK, Вы подтверждаете, что прочитали и&nbsp;поняли,
          а&nbsp;также соглашаетесь с&nbsp;Правилами &amp; Условиями
          и&nbsp;Политикой конфиденциальности.
        </p>
      </div>
  );

};

export default Register;
