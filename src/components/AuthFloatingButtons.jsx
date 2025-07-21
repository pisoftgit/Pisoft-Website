import React from "react";
import { useNavigate } from "react-router-dom";

const AuthFloatingButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-2 right-6 z-[1000] flex flex-row gap-4 bg-orange-100 border border-gray-300 rounded-full shadow-md p-2">
      <button
        onClick={() => navigate("/login")}
        className="relative text-blue-900 font-jr px-6 py-2 rounded-full hover:bg-sky-100 transition"
      >
        Login
        <span className="absolute inset-0 rounded-full -z-10" />
      </button>

      <button
        onClick={() => navigate("/register")}
        className="relative text-orange-600 font-jr px-6 py-2 rounded-full hover:bg-sky-100 transition"
      >
        Register
        <span className="absolute inset-0 rounded-full -z-10" />
      </button>
    </div>
  );
};

export default AuthFloatingButtons;
