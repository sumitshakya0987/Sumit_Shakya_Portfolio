import { useState, useEffect } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import { getExperience } from '../services/api';
import type { Experience } from '../types';

const ExperienceSection = () => {
    const [experiences, setExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        getExperience().then(setExperiences).catch(console.error);
    }, []);

    return (
        <Section id="experience" title="Work Experience">
            <div className="space-y-6">
                {experiences.map((exp) => (
                    <Card
                        key={exp.id}
                        title={exp.role}
                        subtitle={exp.company}
                        date={exp.dates}
                    >
                        <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                            {exp.details && Array.isArray(exp.details) ? exp.details.map((detail, idx) => (
                                <li key={idx}>{detail}</li>
                            )) : <li>{String(exp.details)}</li>}
                        </ul>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default ExperienceSection;
