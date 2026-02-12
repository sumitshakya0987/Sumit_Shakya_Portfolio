import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getProfile } from '../services/api';
import type { Profile } from '../types';
import { Link } from 'react-scroll';
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaLaptopCode } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss } from 'react-icons/si';

const Hero = () => {
    const [profile, setProfile] = useState<Profile | null>(null);

    useEffect(() => {
        getProfile().then(setProfile).catch(console.error);
    }, []);

    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = [
        "Software Developer",
        "Frontend Developer",
        "Backend Developer",
        "MERN Stack Developer",
        "Full Stack Developer"
    ];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, roles, typingSpeed]);

    if (!profile) return null;

    return (
        <div id="home" className="relative h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-dark to-primary overflow-hidden">
            {/* Animated Background Icons */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                {[
                    { Icon: FaReact, color: "#61DAFB", top: "10%", left: "10%", delay: 0 },
                    { Icon: FaNodeJs, color: "#339933", top: "20%", right: "10%", delay: 1 },
                    { Icon: SiTypescript, color: "#3178C6", bottom: "20%", left: "15%", delay: 2 },
                    { Icon: SiMongodb, color: "#47A248", bottom: "10%", right: "15%", delay: 3 },
                    { Icon: SiPostgresql, color: "#336791", top: "50%", left: "5%", delay: 4 },
                    { Icon: SiTailwindcss, color: "#06B6D4", top: "15%", left: "50%", delay: 1.5 },
                    { Icon: FaDatabase, color: "#gray", bottom: "40%", right: "5%", delay: 2.5 },
                    { Icon: FaCode, color: "#white", top: "80%", right: "50%", delay: 3.5 },
                ].map(({ Icon, color, top, left, right, bottom, delay }, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: [0.2, 0.5, 0.2],
                            y: [0, -20, 0],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            delay: delay,
                            ease: "easeInOut"
                        }}
                        style={{ position: 'absolute', top, left, right, bottom, color, fontSize: '2rem' }}
                    >
                        <Icon />
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center max-w-4xl"
            >
                <div className="mb-8 w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-secondary shadow-lg shadow-secondary/20">
                    <img src="/Passport_size.jpeg" alt="Sumit Shakya" className="w-full h-full object-cover" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">{profile.name}</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-6 h-8">
                    {text}<span className="animate-pulse">|</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
                    {profile.summary}
                </p>
                <div className="flex gap-4 justify-center">
                    <Link
                        to="projects"
                        smooth
                        duration={500}
                        className="px-6 py-3 bg-secondary text-dark font-bold rounded-lg cursor-pointer hover:bg-sky-400 transition-colors"
                    >
                        View Projects
                    </Link>
                    <Link
                        to="contact"
                        smooth
                        duration={500}
                        className="px-6 py-3 border border-secondary text-secondary font-bold rounded-lg cursor-pointer hover:bg-secondary/10 transition-colors"
                    >
                        Contact Me
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
