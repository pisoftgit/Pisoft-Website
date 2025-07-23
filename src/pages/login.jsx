import React, { useState } from "react";
import image from "/images.png";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { cn } from "../lib/util";
import { BackgroundLines } from "../components/backgroundLines";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";


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


    const navigate = useNavigate();
    const handleGoBack = () => navigate("/");
    const [hoverIntern, setHoverIntern] = useState(false);

    const baseClasses =
        "flex items-center justify-center gap-2 rounded-full font-jSB cursor-pointer border-2 border-transparent";
    const sizeClasses = "px-3 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm";

    return (
        <main className="relative flex items-center justify-center w-full h-screen overflow-hidden">
            <img
                src={image}
                alt="PiSoft Logo Background"
                className="absolute w-124 h-auto opacity-100 z-0"
                style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            />
            <motion.button
                onClick={handleGoBack}
                onMouseEnter={() => setHoverIntern(true)}
                onMouseLeave={() => setHoverIntern(false)}
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
                className={`${baseClasses} ${sizeClasses} fixed top-4 right-4 z-50`}
                aria-label="Go To Home Page"
            >
                <span className="sm:inline">Go To Home Page</span>
            </motion.button>

            <div className="z-10 shadow-input h-auto mx-auto w-full max-w-3xl rounded-none p-4 md:rounded-2xl md:p-8 backdrop-blur-sm bg-sky-900/20 border border-blue-950/20 flex items-center justify-center flex-col overflow-y-auto max-h-[100vh]">
                <div className="w-full">
                    <h2 className="text-2xl font-jSB text-center text-blue-950">
                        SignUp
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
                            Sign up &rarr;
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

const LabelInputContainer = ({ children, className }) => (
    <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
);
