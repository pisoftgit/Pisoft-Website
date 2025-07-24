import React, { useState, useEffect } from "react";
import image from "/images.png";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { cn } from "../lib/util";
import { motion, AnimatePresence } from "motion/react";
import { NavbarDemo } from "../components/navbar/Navbar2";
import { Example } from "../components/Corn";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


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
            <main className="relative flex items-center justify-center w-full h-screen mt-18 overflow-hidden">
                <img
                    src={image}
                    alt="PiSoft Logo Background"
                    className="absolute w-124 h-auto opacity-100 z-0"
                    style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                />

                <div className="z-10 shadow-input h-auto mx-auto w-full max-w-3xl rounded-none p-4 md:rounded-2xl md:p-8 backdrop-blur-sm bg-blue-200/40 border border-blue-950/20 flex items-center justify-center flex-col overflow-y-auto max-h-[100vh]">
                    <div className="w-full">
                        <h2 className="text-2xl font-jSB text-center text-blue-950">
                            Register Yourself
                        </h2>

                        <form className="my-8 space-y-6">
                            {/* Name - full row */}
                            <LabelInputContainer>
                                <Label htmlFor="name" className=" font-jl text-blue-950">
                                    Name
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

                            {/* Email + Mobile */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <LabelInputContainer className="w-full">
                                    <Label htmlFor="email" className=" font-jl text-blue-950">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </LabelInputContainer>

                                <LabelInputContainer className="w-full">
                                    <Label htmlFor="mobile" className=" font-jl text-blue-950">
                                        Mobile
                                    </Label>
                                    <Input
                                        id="mobile"
                                        name="mobile"
                                        placeholder="Mobile"
                                        type="text"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                    />
                                </LabelInputContainer>
                            </div>

                            {/* Password - full row */}
                            <LabelInputContainer>
                                <Label htmlFor="password" className="font-jl text-blue-950">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </LabelInputContainer>

                            {/* Confirm Password - full row */}
                            <LabelInputContainer>
                                <Label htmlFor="confirmPassword" className="font-jl text-blue-950">
                                    Confirm Password
                                </Label>
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                                {passwordError && (
                                    <p className="text-sm text-red-600 mt-1">{passwordError}</p>
                                )}
                            </LabelInputContainer>



                            {/* Submit */}
                            <div className="flex items-center justify-center">
                                <button
                                    className="group/btn px-5 text center relative block h-10 w-auto rounded-md bg-gradient-to-br from-blue-950 to-blue-900 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                                    type="submit"
                                >
                                    Register &rarr;
                                </button>
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
