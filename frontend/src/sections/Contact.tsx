import { useState, useEffect } from 'react';
import Section from '../components/Section';
import { getProfile } from '../services/api';
import type { Profile } from '../types';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    const [profile, setProfile] = useState<Profile | null>(null);

    useEffect(() => {
        getProfile().then(setProfile).catch(console.error);
    }, []);

    if (!profile) return null;

    return (
        <Section id="contact" title="Get In Touch" className="mb-20">
            <div className="flex flex-col items-center text-center space-y-8">
                <p className="text-xl max-w-2xl text-gray-300">
                    I am currently looking for full-time opportunities. Whether you have a question or just want to say hi, my inbox is always open!
                </p>

                <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
                    <a href={`mailto:${profile.email}`} className="flex items-center gap-4 px-6 py-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 w-full md:w-auto justify-center">
                        <FaEnvelope className="text-secondary text-2xl" />
                        <div className="text-left">
                            <p className="text-sm text-gray-400">Email</p>
                            <p className="text-white font-medium">{profile.email}</p>
                        </div>
                    </a>
                    <a href={`tel:${profile.phone}`} className="flex items-center gap-4 px-6 py-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 w-full md:w-auto justify-center">
                        <FaPhone className="text-secondary text-2xl" />
                        <div className="text-left">
                            <p className="text-sm text-gray-400">Phone</p>
                            <p className="text-white font-medium">{profile.phone}</p>
                        </div>
                    </a>
                </div>

                <div className="flex gap-6 mt-8">
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-400 hover:text-white transition-colors">
                        <FaGithub />
                    </a>
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-400 hover:text-white transition-colors">
                        <FaLinkedin />
                    </a>
                </div>

                <footer className="mt-20 text-gray-500 text-sm">
                    © {new Date().getFullYear()} {profile.name}. All rights reserved.
                </footer>
            </div>
        </Section>
    );
};

export default Contact;
