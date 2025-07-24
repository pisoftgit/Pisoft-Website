import React, { useState, useEffect } from "react";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { cn } from "../lib/util";
import { NavbarDemo } from "../components/navbar/Navbar2";
import { Example } from "../components/Corn";
import Navbar from "../components/Navbar";
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

    const [technologyOptions, setTechnologyOptions] = useState([]);

    useEffect(() => {
        const fetchTechnologies = async () => {
            try {
                const response = await fetch("https://project.pisofterp.com/pipl/restworld/technologies");
                const data = await response.json();

                const formatted = data.map((item) => item.technologyName);
                setTechnologyOptions(formatted);
            } catch (error) {
                console.error("Failed to fetch technology options:", error);
                setTechnologyOptions([]);
            }
        };

        fetchTechnologies();
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
            <main className="relative flex items-center justify-center w-full mt-12 h-screen overflow-hidden">
                <div className="z-10 shadow-input h-auto mx-auto w-full max-w-3xl rounded-none p-4 md:rounded-3xl hover:scale-102 transform transition-all md:p-8 backdrop-blur-sm bg-blue-950 shadow-orange-400 shadow-2xl border border-blue-950/20 flex items-center justify-center flex-col overflow-y-auto max-h-[100vh]">
                    <div className="w-full">
                        <h2 className="text-md md:text-3xl font-jSB text-center text-orange-400">
                            Internship Enquiry
                        </h2>

                        <form className="my-8 space-y-6">
                            {/* Name - full row */}
                            <LabelInputContainer>
                                <Label htmlFor="name" className=" font-jl text-orange-400">
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

                            {/* Technology + Stream */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <LabelInputContainer className="w-full">
                                    <Label htmlFor="technology" className="font-jl text-orange-400">
                                        Technology Interested
                                        <span className="text-red-500 text-lg leading-none"> *</span>
                                    </Label>

                                    <div className="relative">
                                        <select
                                            id="technology"
                                            name="technology"
                                            value={formData.technology}
                                            onChange={handleChange}
                                            className="appearance-none w-full text-black border-2 border-orange-400 bg-white font-medium rounded-md px-4 py-2 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-150 ease-in-out"
                                            required
                                        >
                                            <option value="">-- Select Technology --</option>
                                            {Array.isArray(technologyOptions) &&
                                                technologyOptions.map((tech, idx) => (
                                                    <option key={idx} value={tech}>
                                                        {tech}
                                                    </option>
                                                ))}
                                        </select>

                                        {/* Custom dropdown arrow */}
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-orange-400">
                                            <svg
                                                className="w-5 h-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.292l3.71-4.06a.75.75 0 111.1 1.02l-4.25 4.65a.75.75 0 01-1.1 0L5.25 8.29a.75.75 0 01-.02-1.08z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </LabelInputContainer>



                                <LabelInputContainer className="w-full">
                                    <Label htmlFor="stream" className=" font-jl text-orange-400">
                                        Stream<span className="text-red-500 text-lg leading-none"> *</span>
                                    </Label>
                                    <Input
                                        id="stream"
                                        name="stream"
                                        type="text"
                                        value={formData.stream}
                                        onChange={handleChange}
                                        className={`border-2 border-orange-400`}
                                        required
                                    />
                                </LabelInputContainer>
                            </div>

                            {/* College - full row */}
                            <LabelInputContainer>
                                <Label htmlFor="college" className=" font-jl text-orange-400">
                                    College<span className="text-red-500 text-lg leading-none"> *</span>
                                </Label>
                                <Input
                                    id="college"
                                    name="college"
                                    type="text"
                                    value={formData.college}
                                    onChange={handleChange}
                                    className={`border-2 border-orange-400`}
                                    required
                                />
                            </LabelInputContainer>

                            {/* Submit */}
                            <div className="flex items-center justify-center">
                                <button
                                    className="group/btn px-5  space-y-4 pb-3 text center relative block h-10 w-auto rounded-md bg-gradient-to-br from-orange-500 to-orange-400 font-jl hover:scale-105 text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                                    type="submit"
                                >
                                    Submit
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
