import { useState, useEffect } from 'react';
import Section from '../components/Section';
import { getSkills } from '../services/api';
import type { Skill } from '../types';
import { motion } from 'framer-motion';

const Skills = () => {
    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        getSkills().then(setSkills).catch(console.error);
    }, []);

    return (
        <Section id="skills" title="Technical Skills">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-800/40 backdrop-blur-md p-6 rounded-xl border border-gray-700/50 hover:border-secondary/50 transition-all duration-300 shadow-lg hover:shadow-secondary/10 group"
                    >
                        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent mb-4 group-hover:scale-105 transition-transform origin-left">{skill.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skill.items.split(',').map((item, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-primary/80 text-gray-300 text-sm rounded-full border border-gray-700/50 hover:bg-secondary/20 hover:text-secondary hover:border-secondary/30 transition-all duration-300 cursor-default"
                                >
                                    {item.trim()}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
