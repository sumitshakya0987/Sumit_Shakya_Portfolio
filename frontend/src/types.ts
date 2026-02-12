export interface Profile {
    id: number;
    name: string;
    title: string;
    summary: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
}

export interface Education {
    id: number;
    degree: string;
    institution: string;
    dates: string;
    details: string;
}

export interface Experience {
    id: number;
    role: string;
    company: string;
    dates: string;
    details: string[]; // Parsed from JSON
}

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string;
    link: string;
}

export interface Skill {
    id: number;
    category: string;
    items: string; // Comma separated
}
