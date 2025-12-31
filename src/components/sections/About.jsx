import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

function About() {

    const [expanded, setExpanded] = useState(null);

    const toggle = (section) => {
        setExpanded(expanded === section ? null : section);
    };

    return (
        <section id="About" className=" py-10 bg-[#151925]">
            <h2 className="text-center text-2xl font-bold text-white lg:text-4xl">
                About <span className="text-indigo-400">Me</span>
            </h2>

            <h1 className="text-center text-white text-3xl lg:text-5xl font-serif font-semibold mt-3">
                Get to Know Me Better
            </h1>

            <div className="space-y-4 mt-8 px-4 md:px-20 grid gap-2 lg:grid-cols-3 items-stretch ">

                {/*EXPERIENCE*/}
                <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden lg:h-full">

                    <button
                        onClick={() => toggle("experience")}
                        className="w-full flex items-center justify-between p-5 hover:bg-gray-800/50 transition lg:cursor-default" >
                        <div className="flex items-center gap-3">
                            <img src="work.svg" alt="work icon " className="h-10 w-10 "></img>
                            <h3 className="text-lg font-semibold text-white ">Work Experience</h3>
                        </div>

                        <ChevronRight
                            className={`lg:hidden transition-transform duration-300 text-indigo-400 ${expanded === "experience" ? "rotate-90" : ""
                                }`}
                            size={20}
                        />
                    </button>

                    <div className={`transition-all duration-300 overflow-hidden ${expanded === "experience" ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"} lg:max-h-full lg:opacity-100`}>
                        <div className="p-5 pt-0 border-t border-gray-800 space-y-4">
                            <div className="border-l-2 border-blue-500 pl-4">
                                <h4 className="font-semibold text-lg text-white ">Cashier</h4>
                                <p className="text-blue-400 text-sm mb-2">Arpico Daily | 2022 </p>
                                <p className="text-gray-400 text-sm">
                                    worked as a  Cashier at Arpico Daily, Kuliyapitiya branch, with experience in customer service, cash handling, and daily transaction management.
                                </p>
                            </div>

                            <div className="border-l-2 border-blue-500 pl-4">
                                <h4 className="font-semibold text-lg text-white ">Raigam Marketing Services(PVT)Ltd</h4>
                                <p className="text-blue-400 text-sm mb-2">Chilaw Agency | 2023</p>
                                <p className="text-gray-400 text-sm">
                                    Worked as a Marketing Representative at Raigam Marketing Services (PVT) Ltd in 2023, gaining experience in sales promotion, customer engagement, and market support activities.
                                </p>
                            </div>
                            <div className="border-l-2 border-blue-500 pl-4">
                                <h4 className="font-semibold text-lg text-white ">Suwanda Industries(PVT)Ltd</h4>
                                <p className="text-blue-400 text-sm mb-2">Chilaw Agency | 2023</p>
                                <p className="text-gray-400 text-sm">
                                    Worked as a Sales Representative at Suwanda Industries (PVT) Ltd in 2023, gaining experience in customer relations, sales support, and field-level market operations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*SKILLS*/}
                <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 h-full flex flex-col">
                    <button
                        onClick={() => toggle("skills")}
                        className="w-full flex items-center justify-between p-5 hover:bg-gray-800/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3">
                            <img src="bulb.svg" alt="bulb icon " className="w-10 h-10" />
                            <h3 className="text-lg font-semibold text-white">Technical Skills</h3>
                        </div>

                        <ChevronRight
                            className={` lg:hidden transition-transform duration-300 text-indigo-400 ${expanded === "skills" ? "rotate-90" : ""
                                } lg:max-h-full lg:opacity-100`}
                            size={20}
                        />
                    </button>

                    <div
                        className={`transition-all duration-300 overflow-hidden ${expanded === "skills" ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                            } lg:max-h-full lg:opacity-100`}
                    >
                        <div className="p-5 pt-0 border-t border-gray-800 text-white space-y-3">

                            {[
                                { skill: "React & Node.js", value: 80 },
                                { skill: "Tailwind CSS", value: 75 },
                                { skill: "MongoDB", value: 70 },
                                { skill: "python", value: 80 },
                                { skill: "Basic Machine Learning Concepts", value: 65 },
                                { skill: "Power BI", value: 60 },
                                { skill: "PostgreSQL for Data Analysis", value: 80 },
                                { skill: "Express js", value: 70 },
                                { skill: "Git & GitHub", value: 75 },

                            ].map((item, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm font-medium">{item.skill}</span>
                                        <span className="text-sm text-blue-400">{item.value}%</span>
                                    </div>

                                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-indigo-400 transition-all duration-1000 ease-out"
                                            style={{ width: `${item.value}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                {/*EDUCATION*/}
                <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 h-full flex flex-col ">
                    <button
                        onClick={() => toggle("education")}
                        className="w-full flex items-center justify-between p-5 hover:bg-gray-800/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3">
                            <img src="education.svg" alt="education icon " className=" w-10 h-10" />
                            <h3 className="text-lg font-semibold text-white">Education</h3>
                        </div>

                        <ChevronRight
                            className={` lg:hidden transition-transform duration-300 text-indigo-400 ${expanded === "education" ? "rotate-90" : ""
                                }`}
                            size={20}

                        />
                    </button>

                    <div
                        className={`transition-all duration-300 overflow-hidden ${expanded === "education" ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                            } lg:max-h-full lg:opacity-100`}
                    >
                        <div className="p-5 pt-0 border-t border-gray-800 space-y-4">
                            <div className="border-l-2 border-purple-500 pl-4">
                                <h4 className="font-semibold text-white">G.C.E. Advanced Level (A/L) </h4>
                                <p className="text-purple-400 text-sm mb-1">Saranath National College kuliyapitiya  </p>
                                <p className="text-gray-400 text-xs">Completed</p>
                            </div>

                            <div className="border-l-2 border-purple-500 pl-4">
                                <h4 className="font-semibold text-white">Information and Communication Technology</h4>
                                <p className="text-purple-400 text-sm mb-1">Uva Wellassa University of Srilanka</p>
                                <p className="text-gray-400 text-xs">2023-2027</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;
