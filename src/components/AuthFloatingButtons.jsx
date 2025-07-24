import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiLogIn } from "react-icons/fi";
import { FaPenFancy } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AuthFloatingButtons = () => {
  const [hoverIntern, setHoverIntern] = useState(false);
  const [hoverTest, setHoverTest] = useState(false);
  const [hoverLogin, setHoverLogin] = useState(false);
  const navigate = useNavigate()

  const handleApplyInternship = () =>{
    navigate("/SignUpUser")
  }

  const HandleLoginButton = ()=>{
    navigate("/LoginRegisterUser")
  }

  const baseClasses =
    "flex items-center justify-center gap-2 rounded-full font-jSB cursor-pointer border-2 border-transparent";
  const sizeClasses = "px-3 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm";

  return (
    <div className="flex justify-end gap-3 pt-2 z-600000">
      {/* Internship Button */}
      <motion.button
        onMouseEnter={() => setHoverIntern(true)}
        onMouseLeave={() => setHoverIntern(false)}
        onClick={handleApplyInternship}
        initial={{ backgroundColor: "#0c1e3a", color: "#FDA851" }}
        animate={{
          backgroundColor: hoverIntern ? "#FDA851" : "#0c1e3a",
          color: hoverIntern ? "#000" : "#FDA851",
          scale: hoverIntern ? 1.05 : 1,
          boxShadow: hoverIntern
            ? "0 4px 12px rgba(253, 186, 116, 0.5)"
            : "none",
        }}
        transition={{ duration: 0.3 }}
        className={`${baseClasses} ${sizeClasses}`}
        aria-label="Apply For Internship"
      >
        <span className="sm:hidden">
          <FiBriefcase className="w-5 h-5" />
        </span>
        <span className="hidden sm:inline">Apply for Internship</span>
        <FiBriefcase className="hidden sm:block w-5 h-5" />
      </motion.button>

      {/* Take Test Button */}
      <motion.button
        onMouseEnter={() => setHoverTest(true)}
        onMouseLeave={() => setHoverTest(false)}
        initial={{ backgroundColor: "#0c1e3a", color: "#FDA851" }}
        onClick={() => window.open("https://project.pisofterp.com/pipl/collegeUniversityEvent/takeTest", "_blank")}
        animate={{
          backgroundColor: hoverTest ? "#FDA851" : "#0c1e3a",
          color: hoverTest ? "#000" : "#FDA851",
          scale: hoverTest ? 1.05 : 1,
          boxShadow: hoverTest
            ? "0 4px 12px rgba(253, 186, 116, 0.5)"
            : "none",
        }}
        transition={{ duration: 0.3 }}
        className={`${baseClasses} ${sizeClasses}`}
        aria-label="Take a Test"
      >
        <span className="sm:hidden">
          <FaPenFancy className="w-5 h-5" />
        </span>
        <span className="hidden sm:inline">Take a Test</span>
        <FaPenFancy className="hidden sm:block w-5 h-5" />
      </motion.button>

      {/* Login Button */}
      <motion.button
        onMouseEnter={() => setHoverLogin(true)}
        onMouseLeave={() => setHoverLogin(false)}
        onClick={HandleLoginButton}
        initial={{ backgroundColor: "#0c1e3a", color: "#FDA851" }}
        animate={{
          backgroundColor: hoverLogin ? "#FDA851" : "#0c1e3a",
          color: hoverLogin ? "#000" : "#FDA851",
          scale: hoverLogin ? 1.05 : 1,
          boxShadow: hoverLogin
            ? "0 4px 12px rgba(253, 186, 116, 0.5)"
            : "none",
        }}
        transition={{ duration: 0.3 }}
        className={`${baseClasses} ${sizeClasses}`}
        aria-label="Login"
      >
        <span className="sm:hidden">
          <FiLogIn className="w-5 h-5" />
        </span>
        <span className="hidden sm:inline">Login</span>
        <FiLogIn className="hidden sm:block w-5 h-5" />
      </motion.button>
    </div>
  );
};

export default AuthFloatingButtons;
