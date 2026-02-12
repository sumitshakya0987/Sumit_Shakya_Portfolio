import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    id: string;
    title?: string;
    children: ReactNode;
    className?: string;
}

const Section = ({ id, title, children, className = '' }: SectionProps) => {
    return (
        <section id={id} className={`py-20 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
            {title && (
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent"
                >
                    {title}
                </motion.h2>
            )}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
