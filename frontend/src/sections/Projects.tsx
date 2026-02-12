import { useState, useEffect } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import { getProjects } from '../services/api';
import type { Project } from '../types';
import { FaExternalLinkAlt, FaGithub, FaFolder } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        getProjects().then(setProjects).catch(console.error);
    }, []);

    return (
        <Section id="projects" title="Key Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="bg-gray-800/40 backdrop-blur-md p-6 rounded-xl border border-gray-700/50 hover:border-secondary/50 transition-all duration-300 shadow-lg hover:shadow-secondary/20 group flex flex-col h-full"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-secondary/10 rounded-full text-secondary group-hover:text-white group-hover:bg-secondary transition-colors">
                                <FaFolder size={24} />
                            </div>
                            <div className="flex gap-4">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-secondary transition-colors"
                                        title="Live Demo"
                                    >
                                        <FaExternalLinkAlt size={20} />
                                    </a>
                                )}
                                {/* Placeholder for GitHub link if available in future schema */}
                                {/* <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><FaGithub size={20} /></a> */}
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                            {project.title}
                        </h3>

                        <div className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm">
                            {project.description}
                        </div>

                        <ul className="flex flex-wrap gap-2 mt-auto">
                            {project.technologies && project.technologies.split(',').map((tech, i) => (
                                <li key={i} className="text-xs font-mono text-secondary/80 bg-secondary/10 px-2 py-1 rounded">
                                    {tech.trim()}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
