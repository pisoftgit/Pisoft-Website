import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaUserPlus } from "react-icons/fa";

const AuthFloatingButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-5 right-5 z-[1000] flex flex-row gap-4 items-end">
      {/* Login Button with Tooltip */}
      <div className="relative group flex flex-col items-center">
        <button
          onClick={() => navigate("/login")}
          className="w-14 h-14 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-xl hover:bg-blue-700 hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <FaUser size={22} />
        </button>
        <div className="absolute top-[110%] text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-blue-100 text-black mt-2 font-jr text-md px-5 py-3 rounded shadow-lg pointer-events-none">
          Login 
        </div>
      </div>

      {/* Register Button with Tooltip */}
      <div className="relative group flex flex-col items-center">
        <button
          onClick={() => navigate("/register")}
          className="w-14 h-14 flex items-center justify-center bg-orange-500 text-white rounded-full shadow-xl hover:bg-orange-600 hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <FaUserPlus size={22} />
        </button>
       <div className="absolute top-[110%] text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-blue-100 text-black mt-2 text-md font-jr px-5 py-3 rounded shadow-lg pointer-events-none">
          Register
        </div>
      </div>
    </div>
  );
};

export default AuthFloatingButtons;
