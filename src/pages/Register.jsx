import React, { useState, useEffect } from "react";
import image from "/images.png";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { cn } from "../lib/util";
import { NavbarDemo } from "../components/navbar/Navbar2";
import { Example } from "../components/Corn";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


export default function RegisterUser() {

    const [passwordError, setPasswordError] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedFormData = { ...formData, [name]: value };

        setFormData(updatedFormData);

        if (
            name === "password" ||
            name === "confirmPassword"
        ) {
            if (
                updatedFormData.password &&
                updatedFormData.confirmPassword &&
                updatedFormData.password !== updatedFormData.confirmPassword
            ) {
                setPasswordError("Passwords do not match.");
            } else {
                setPasswordError("");
            }
        }
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
            <div className="fixed left-5 top-2 z-50000 lg:hidden">
                <Navbar />
            </div>
            <div className="fixed top-2 right-4 z-50 max-w-[90%] sm:max-w-none lg:hidden">
                <Example />
            </div>
            <main className="relative flex items-center justify-center mt-12 w-full h-screen overflow-hidden">
                <div className="z-10 shadow-input h-auto mx-auto w-full max-w-3xl rounded-none p-4 md:rounded-3xl hover:scale-102 transform transition-all md:p-8 backdrop-blur-sm bg-blue-950 shadow-orange-400 shadow-2xl border border-blue-950/20 flex items-center justify-center flex-col overflow-y-auto max-h-[100vh]">
                    <div className="w-full">
                        <h2 className="text-md md:text-3xl font-jSB text-center text-orange-400">
                            Register Yourself
                        </h2>

                        <form className="my-8 space-y-6">
                            {/* Name - full row */}
                            <LabelInputContainer>
                                <Label htmlFor="name" className=" font-jl text-orange-400" required>
                                    Name<span className="text-red-500 text-lg leading-none"> *</span>
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`border-2 border-orange-400`}
                                    required
                                />
                            </LabelInputContainer>

                            {/* Email + Mobile */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <LabelInputContainer className="w-full">
                                    <Label htmlFor="email" className=" font-jl text-orange-400">
                                        Email<span className="text-red-500 text-lg leading-none"> *</span>
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    className={`border-2 border-orange-400`}
                                    required

                                    />
                                </LabelInputContainer>

                                <LabelInputContainer className="w-full">
                                    <Label htmlFor="mobile" className=" font-jl text-orange-400">
                                        Mobile<span className="text-red-500 text-lg leading-none"> *</span>
                                    </Label>
                                    <Input
                                        id="mobile"
                                        name="mobile"
                                        type="text"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                    className={`border-2 border-orange-400`}
                                    required

                                    />
                                </LabelInputContainer>
                            </div>

                            {/* Password - full row */}
                            <LabelInputContainer>
                                <Label htmlFor="password" className="font-jl text-orange-400">
                                    Password<span className="text-red-500 text-lg leading-none"> *</span>
                                </Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`border-2 border-orange-400`}
                                    required

                                />
                            </LabelInputContainer>

                            {/* Confirm Password - full row */}
                            <LabelInputContainer>
                                <Label htmlFor="confirmPassword" className="font-jl text-orange-400">
                                    Confirm Password<span className="text-red-500 text-lg leading-none"> *</span>
                                </Label>
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={`border-2 border-orange-400`}
                                    required

                                />
                                {passwordError && (
                                    <p className="text-sm text-red-600 mt-1">{passwordError}</p>
                                )}
                            </LabelInputContainer>



                            {/* Submit */}
                            <div className="flex items-center justify-center">
                                <button
                                    className="group/btn px-5 py-3 text center relative block h-10 w-auto rounded-md bg-gradient-to-br from-orange-500 to-orange-400 font-jl hover:scale-105 text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                                    type="submit"
                                >
                                    Register
                                </button>
                            </div>
                            <div className="text-center mt-4">
                                <p className="text-sm text-orange-400 font-jl">
                                    Alraedy have an account?{" "}
                                    <span
                                        onClick={() => navigate("/LoginRegisterUser")}
                                        className="text-yellow-400 underline cursor-pointer hover:text-orange-600 text-md font-jl transition-colors duration-200"
                                    >
                                        Login
                                    </span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            {/* footer */}
            <section className="overflow-hidden w-screen">
                <Footer />
            </section>
        </section>
    );
}

const LabelInputContainer = ({ children, className }) => (
    <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
);
