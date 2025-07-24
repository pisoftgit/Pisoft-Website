import React, { useState, useEffect, useRef } from "react";
import image from "/images.png";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { cn } from "../lib/util";
import { motion, AnimatePresence } from "motion/react";
import { NavbarDemo } from "../components/navbar/Navbar2";
import { Example } from "../components/Corn";
import Navbar from "../components/Navbar";
import AuthFloatingButtons from "../components/AuthFloatingButtons";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function LoginRegisterUser() {
    const [formData, setFormData] = useState({
        name: "",
        password :""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    return (
        <section className="overflow-hidden">
            {/* === TOP NAVBAR WRAPPER === */}
            <div className="fixed top-0 left-0 w-full z-50">
                <div className="sticky top-0 z-40">
                    <NavbarDemo />
                </div>
            </div>

            {/* === Mobile navbar */}
            <div className="fixed left-5 top-2 z-50 lg:hidden">
                <Navbar />
            </div>
            <div className="fixed top-2 right-4 z-50 max-w-[90%] sm:max-w-none lg:hidden">
                <Example />
            </div>

            {/* === Main Form === */}
            <main className="relative flex items-center justify-center w-full h-screen overflow-hidden pt-16">
                <img
                    src={image}
                    alt="PiSoft Logo Background"
                    className="absolute w-124 h-auto opacity-100 z-0"
                    style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                />
                <div className="z-10 shadow-input h-auto mx-auto w-full max-w-3xl rounded-none p-4 md:rounded-2xl md:p-8 backdrop-blur-sm bg-blue-200/40 border border-blue-950/20 flex items-center justify-center flex-col overflow-y-auto max-h-[100vh]">
                    <div className="w-full">
                        <h2 className="text-2xl font-jSB text-center text-blue-950">Login</h2>

                        <form className="my-8 space-y-6">
                            {/* Name - full row */}
                            <LabelInputContainer>
                                <Label htmlFor="name" className="font-jl text-blue-950">
                                    User Name
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </LabelInputContainer>

                            {/* password - full row */}
                            <LabelInputContainer>
                                <Label htmlFor="college" className="font-jl text-blue-950">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    name="pasword"
                                    placeholder="Password"
                                    type="password"
                                    value={formData.college}
                                    onChange={handleChange}
                                />
                            </LabelInputContainer>

                            {/* Submit Button */}
                            <div className="flex items-center justify-center">
                                <button
                                    className="group/btn px-6 py-2 text-center rounded-md bg-gradient-to-br from-blue-950 to-blue-900 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] hover:scale-105 transition-transform duration-200"
                                    type="submit"
                                >
                                    Login &rarr;
                                </button>
                            </div>

                            {/* Register Link */}
                            <div className="text-center mt-4">
                                <p className="text-sm text-blue-950 font-jl">
                                    Don't have an account?{" "}
                                    <span
                                        onClick={() => navigate("/RegisterUser")}
                                        className="text-blue-700 underline cursor-pointer hover:text-blue-900 transition-colors duration-200"
                                    >
                                        Register
                                    </span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            {/* === Footer === */}
            <section className="overflow-hidden w-screen">
                <Footer />
            </section>
        </section>
    );
}

// === Utility Container ===
const LabelInputContainer = ({ children, className }) => (
    <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
);
