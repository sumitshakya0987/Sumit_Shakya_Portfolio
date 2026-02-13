import { useState, useEffect } from 'react';
import Section from '../components/Section';
import Loading from '../components/Loading';
import { getSkills } from '../services/api';
import type { Skill } from '../types';
import { motion } from 'framer-motion';

const Skills = () => {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [loading, setLoading] = useState(true);

    const getIcon = (category: string) => {
        switch (category) {
            case 'Languages': return '💻';
            case 'Databases': return '🗄️';
            case 'Web Technologies': return '🌐';
            case 'Core Concepts': return '🧠';
            case 'Tools & Cloud': return '☁️';
            case 'AI Tools': return '🤖';
            default: return '⚡';
        }
    };

    useEffect(() => {
        getSkills()
            .then(setSkills)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <Section id="skills" title="Technical Skills">
                <Loading />
            </Section>
        );
    }

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
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        className="bg-gray-800/40 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50 hover:border-secondary/50 transition-all duration-300 shadow-xl hover:shadow-secondary/20 group flex flex-col items-center text-center"
                    >
                        <div className="text-6xl mb-6 filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {getIcon(skill.category)}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-secondary transition-colors">{skill.category}</h3>
                        <div className="flex flex-wrap justify-center gap-2">
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
