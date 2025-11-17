import { Link } from "react-scroll";

function Navbar() {
    return (

        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

                <h1 className='text-xl font-bold text-blue-600'>My portfolio</h1>
                <div classname='space-x-6'>
                    <Link to="hero" smoth={true} duration={500} offset={-80} className="cursor-pointer hover:text-blue-600">
                        Home
                    </Link>
                    <Link to="about" smooth={true} duration={500} offset={-80}
                        className="cursor-pointer hover:text-blue-600">
                        About
                    </Link>

                    <Link to="services" smooth={true} duration={500} offset={-80}
                        className="cursor-pointer hover:text-blue-600">
                        Services
                    </Link>

                    <Link to="portfolio" smooth={true} duration={500} offset={-80}
                        className="cursor-pointer hover:text-blue-600">
                        Portfolio
                    </Link>

                    <Link to="contact" smooth={true} duration={500} offset={-80}
                        className="cursor-pointer hover:text-blue-600">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>



    )
} export default Navbar;