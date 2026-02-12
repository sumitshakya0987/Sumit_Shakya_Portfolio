import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'skills' },
        { id: 4, link: 'experience' },
        { id: 5, link: 'projects' },
        { id: 6, link: 'contact' },
    ];

    return (
        <nav className={`fixed w-full h-20 z-50 transition-all duration-300 ${scrolled ? 'bg-primary/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="flex justify-between items-center w-full h-full px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-2xl font-bold text-secondary cursor-pointer hover:text-white transition-colors">
                    <Link to="home" smooth duration={500}>Sumit Shakya</Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-secondary hover:scale-105 duration-200"
                        >
                            <Link to={link} smooth duration={500} offset={-80}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex gap-4">
                    <a href="https://github.com/sumitshakya0987" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-300 hover:text-secondary transition-colors"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/sumit-shakya-a1b066252/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-300 hover:text-secondary transition-colors"><FaLinkedin /></a>
                </div>


                {/* Mobile Menu Icon */}
                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer pr-4 z-50 text-gray-300 md:hidden"
                >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>

                {/* Mobile Menu */}
                {nav && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300">
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                className="px-4 cursor-pointer capitalize py-6 text-2xl hover:text-secondary duration-200"
                            >
                                <Link
                                    onClick={() => setNav(false)}
                                    to={link}
                                    smooth
                                    duration={500}
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                        <li className="flex gap-6 mt-8">
                            <a href="https://github.com/sumitshakya0987" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-300 hover:text-secondary transition-colors"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/sumit-shakya-a1b066252/" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-300 hover:text-secondary transition-colors"><FaLinkedin /></a>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
