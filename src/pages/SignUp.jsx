import React, { useState, useEffect } from "react";
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


export default function LoginUser() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        technology: "",
        stream: "",
        college: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const [showAuthButtons, setShowAuthButtons] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const aboutTop = aboutSectionRef.current.getBoundingClientRect().top;
            const techTop = techSectionRef.current.getBoundingClientRect().top;

            if (aboutTop >= -100 && techTop > window.innerHeight * 0.5) {
                setShowLanyard(true);
            } else {
                setShowLanyard(false);
            }

            // Show/hide AuthFloatingButtons
            if (window.scrollY > 100) {
                setShowAuthButtons(false);
            } else {
                setShowAuthButtons(true);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                            Internship Enquiry
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

                            {/* Technology + Stream */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <LabelInputContainer className="w-full">
                                    <Label htmlFor="technology" className=" font-jl text-blue-950">
                                        Technology Interested
                                    </Label>
                                    <Input
                                        id="technology"
                                        name="technology"
                                        placeholder="Technology"
                                        type="text"
                                        value={formData.technology}
                                        onChange={handleChange}
                                    />
                                </LabelInputContainer>

                                <LabelInputContainer className="w-full">
                                    <Label htmlFor="stream" className=" font-jl text-blue-950">
                                        Stream
                                    </Label>
                                    <Input
                                        id="stream"
                                        name="stream"
                                        placeholder="Stream"
                                        type="text"
                                        value={formData.stream}
                                        onChange={handleChange}
                                    />
                                </LabelInputContainer>
                            </div>

                            {/* College - full row */}
                            <LabelInputContainer>
                                <Label htmlFor="college" className=" font-jl text-blue-950">
                                    College
                                </Label>
                                <Input
                                    id="college"
                                    name="college"
                                    placeholder="College"
                                    type="text"
                                    value={formData.college}
                                    onChange={handleChange}
                                />
                            </LabelInputContainer>

                            {/* Submit */}
                            <div className="flex items-center justify-center">
                                <button
                                    className="group/btn px-5 text center relative block h-10 w-auto rounded-md bg-gradient-to-br from-blue-950 to-blue-900 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                                    type="submit"
                                >
                                    Submit &rarr;
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
