
import { Sling as Hamburger } from 'hamburger-react';
import React, { useState } from "react";

function Navbar() {
    const [isOpen, setOpen] = useState(false);
    return (
        <div>
            < nav className=" fixed w-full  top-0 left-0 z-50 bg-[#151925] px-6 lg:px-16  flex justify-between items-center" >

                {/* logo image  */}
                <a href='#Home'><img src='logo-m.svg' alt='logo' className='w-15 h-15 top-0 cursor-pointer ' /></a>

                {/*desktop menu  */}
                <ul className="hidden lg:flex items-center gap-10 text-white font-medium">
                    <li>
                        <a href="#Home" className="hover:text-indigo-400 transition">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#About" className="hover:text-indigo-400 transition">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#Services" className="hover:text-indigo-400 transition">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#Projects" className="hover:text-indigo-400 transition">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#Contact" className="hover:text-indigo-400 transition">
                            Contact
                        </a>
                    </li>
                </ul>

                {/*react mobile hamburger */}

                <div className="lg:hidden">
                    <Hamburger
                        toggled={isOpen}
                        toggle={setOpen}
                        color='#ffffff'
                        size={25}
                    />
                </div>

            </nav >

            {/* mobile drop down menu  */}

            {isOpen && (
                <div className="fixed top-16 right-4 text-center bg-[#1c2030] text-white rounded-lg shadow-lg py-4 px-6 flex flex-col gap-4  mt-2 w-50 z-70">
                    <a href="#Home" onClick={() => setOpen(false)} className="text-base hover:text-indigo-400">
                        Home
                    </a>
                    <a href="#About" onClick={() => setOpen(false)} className="text-base hover:text-indigo-400">
                        About
                    </a>
                    <a href="#Services" onClick={() => setOpen(false)} className="text-base hover:text-indigo-400">
                        Services
                    </a>
                    <a href="#Projects" onClick={() => setOpen(false)} className="text-base hover:text-indigo-400">
                        Projects
                    </a>
                    <a href="#Contact" onClick={() => setOpen(false)} className="text-base hover:text-indigo-400">
                        Contact
                    </a>
                </div>
            )}


        </div>
    )
} export default Navbar;