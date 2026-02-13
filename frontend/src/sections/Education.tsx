import { useState, useEffect } from 'react';
import Section from '../components/Section';
import Loading from '../components/Loading';
import { getEducation } from '../services/api';
import type { Education } from '../types';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const EducationSection = () => {
    const [education, setEducation] = useState<Education[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getEducation()
            .then(setEducation)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <Section id="education" title="Education">
                <Loading />
            </Section>
        );
    }

    return (
        <Section id="education" title="Education">
            <div className="space-y-8 max-w-4xl mx-auto">
                {education.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="bg-gray-800/40 backdrop-blur-md p-6 rounded-xl border border-gray-700/50 hover:border-secondary/50 transition-all duration-300 shadow-lg relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <FaGraduationCap size={100} />
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">{edu.degree}</h3>
                                    <p className="text-secondary font-medium text-lg">{edu.institution}</p>
                                </div>
                                <span className="px-3 py-1 bg-primary/50 rounded-full text-xs font-mono border border-gray-700 text-gray-300 whitespace-nowrap">
                                    {edu.dates}
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl border-l-2 border-secondary/30 pl-4">
                                {edu.details}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default EducationSection;
