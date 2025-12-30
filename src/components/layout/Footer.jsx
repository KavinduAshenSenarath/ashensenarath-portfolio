
import { Github, Linkedin, Twitter } from "lucide-react";
import SocialIcon from "../../assets/SocialIcon";


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#151925] text-gray-400 py-12 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 lg:grid-cols-4 lg:gap-16 ">

                <div className="space-y-4">
                    <img src="logo-m.svg" alt="logo" className="w-15 h-15 lg:w-16 lg:h-16 " />
                    <p className="text-sm leading-relaxed lg:text-base">
                        Aspiring BI Intern skilled in Power BI, Excel, and SQL, with a MERN stack foundation.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-white text-lg font-semibold lg:text-xl">Contact</h2>

                    <div className="flex items-center gap-3">
                        <img src="email.svg" alt="email" className="w-5 h-5" />
                        <span className="text-sm">kavinduashensenarath@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src="phone.svg" alt="phone" className="w-5 h-5" />
                        <span className="text-sm">+94 774 820 767</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-white text-lg font-semibold">Quick Links</h2>

                    <ul className="space-y-2">
                        <li>
                            <a href="#About" className="block hover:text-indigo-400">About</a>
                        </li>
                        <li>
                            <a href="#Services" className="block hover:text-indigo-400">Services</a>
                        </li>
                        <li>
                            <a href="#Projects" className="block hover:text-indigo-400">Projects</a>
                        </li>
                        <li>
                            <a href="#Contact" className="block hover:text-indigo-400">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-white text-lg font-semibold">Follow Me</h2>

                    <div className="flex gap-4 lg:gap-5">
                        <SocialIcon icon={<Github />} />
                        <SocialIcon icon={<Linkedin />} />
                        <SocialIcon icon={<Twitter />} />

                    </div>
                </div>

            </div>

            <div className="border-t border-slate-800 mt-10 pt-6 text-center">
                <p className="text-sm lg:text-base">
                    &copy; {currentYear} Ashen Senarath. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
