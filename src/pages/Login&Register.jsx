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
            <main className="relative flex items-center justify-center w-full h-screen overflow-hidden">
                <div className="z-10 shadow-input h-auto mx-auto w-full max-w-3xl rounded-none p-4 md:rounded-3xl hover:scale-102 transform transition-all md:p-8 backdrop-blur-sm bg-blue-950 shadow-orange-400 shadow-2xl border border-blue-950/20 flex items-center justify-center flex-col overflow-y-auto max-h-[100vh]">
                    <div className="w-full">
                        <h2 className="text-md md:text-3xl font-jSB text-center text-orange-400">
                            Login
                        </h2>

                        <form className="my-8 space-y-6">
                            {/* Name - full row */}
                            <LabelInputContainer>
                                <Label htmlFor="name" className="font-jl text-orange-400">
                                    User Name
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`border-2 border-orange-400`}
                                />
                            </LabelInputContainer>

                            {/* password - full row */}
                            <LabelInputContainer>
                                <Label htmlFor="college" className="font-jl text-orange-400">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    name="pasword"
                                    placeholder="Password"
                                    type="password"
                                    value={formData.college}
                                    onChange={handleChange}
                                    className={`border-2 border-orange-400`}
                                />
                            </LabelInputContainer>

                            {/* Login Button */}
                            <div className="flex items-center justify-center">
                                <button
                                    className="group/btn px-5 py-3 text center relative block h-10 w-auto rounded-md bg-gradient-to-br from-orange-500 to-orange-400 font-jl hover:scale-105 text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                                    type="submit"
                                >
                                    Login &rarr;
                                </button>
                            </div>

                            {/* Register Link */}
                            <div className="text-center mt-4">
                                <p className="text-sm text-orange-400 font-jl">
                                    Don't have an account?{" "}
                                    <span
                                        onClick={() => navigate("/RegisterUser")}
                                        className="text-yellow-400 underline cursor-pointer hover:text-orange-600 text-md font-jl transition-colors duration-200"
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
