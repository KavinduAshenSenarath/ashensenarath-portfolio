import { Link } from "react-scroll";
import { Sling as Hamburger } from 'hamburger-react';
import React, { useState } from "react";

function Navbar() {
    const [isOpen, setOpen] = useState(false);
    return (
        <div>
            < nav className=" fixed w-full  top-0 left-0 z-50 bg-[#151925] px-4 py-4 flex justify-between items-center" >
                <img src='logo-m.svg' alt='logo' className='w-20 h-20 top-0 cursor-pointer' />
                <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                    color='#ffffff'
                    size={25}
                />
            </nav >

            {isOpen && (
                <div className="fixed top-16 right-4 text-center bg-[#1c2030] text-white rounded-lg shadow-lg py-4 px-6 flex flex-col gap-4  mt-2 w-50 z-70">
                    <a href="#home" onClick={() => setOpen(false)} className="text-base hover:text-[#5254D8]">
                        Home
                    </a>
                    <a href="#about" onClick={() => setOpen(false)} className="text-base hover:text-[#5254D8]">
                        About
                    </a>
                    <a href="#services" onClick={() => setOpen(false)} className="text-base hover:text-[#5254D8]">
                        Services
                    </a>
                    <a href="#portfolio" onClick={() => setOpen(false)} className="text-base hover:text-[#5254D8]">
                        Portfolio
                    </a>
                    <a href="#contact" onClick={() => setOpen(false)} className="text-base hover:text-[#5254D8]">
                        Contact
                    </a>
                </div>
            )}


        </div>
    )
} export default Navbar;