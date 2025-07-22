import React from "react";
import { useNavigate } from "react-router-dom";

const AuthFloatingButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 right-1 z-[1000] gap-2 bg-transparent flex flex-col p-2">
      {/* Login Button */}
      <button
        onClick={() => navigate("/login")}
        className="relative inline-flex h-12 overflow-hidden rounded-full focus:outline-none focus:ring-4 "
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-950 hover:bg-orange-300 hover:text-black py-2 text-md font-jl text-white backdrop-blur-3xl">
          Take a test
        </span>
      </button>

      {/* Register Button */}
      <button
        onClick={() => navigate("/register")}
        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-cyan-200"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-950 hover:bg-orange-300 hover:text-black px-4 py-2 text-md font-jl text-white backdrop-blur-3xl">
          Apply for Internship
        </span>
      </button>
    </div>
  );
};

export default AuthFloatingButtons;
