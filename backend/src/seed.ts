import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

const seed = async () => {
    const db = await open({
        filename: './portfolio.db',
        driver: sqlite3.Database
    });

    // Clear existing data
    await db.exec('DELETE FROM profile');
    await db.exec('DELETE FROM education');
    await db.exec('DELETE FROM experience');
    await db.exec('DELETE FROM projects');
    await db.exec('DELETE FROM skills');

    // Insert Profile
    await db.run(
        `INSERT INTO profile (name, title, summary, email, phone, linkedin, github) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
            'Sumit Shakya',
            'Software Developer',
            'Aspiring Software Developer with a B.Tech in Information Technology and hands-on internship experience. Strong understanding of the Software Development Life Cycle (SDLC) and software development best practices. Proficient in Java, Python, and SQL, with a track record of building full-stack applications and solving complex algorithmic problems. Committed to writing clean, efficient code and eager to contribute to high-impact projects.',
            'shakyasumit0987@gmail.com',
            '+91-9336393010',
            'https://www.linkedin.com/in/sumit-shakya-a1b066252/',
            'https://github.com/sumitshakya0987'
        ]
    );

    // Insert Education
    await db.run(
        `INSERT INTO education (degree, institution, dates, details) VALUES (?, ?, ?, ?)`,
        [
            'Bachelor of Technology (Information Technology)',
            'ABES Engineering College, Ghaziabad (AKTU)',
            'Nov 2021 – July 2025',
            'CGPA: 8.02 (Equivalent to >60%). Status: Graduated with No Active Backlogs'
        ]
    );
    await db.run(
        `INSERT INTO education (degree, institution, dates, details) VALUES (?, ?, ?, ?)`,
        [
            'Senior Secondary (12th)',
            'Jawahar Navodaya Vidyalaya, Farrukhabad',
            '2020',
            'Percentage: 82%'
        ]
    );

    // Insert Experience
    await db.run(
        `INSERT INTO experience (role, company, dates, details) VALUES (?, ?, ?, ?)`,
        [
            'Full Stack Developer Intern',
            'Infyair Pvt Ltd',
            'Nov 2025 – Jan 2026',
            JSON.stringify([
                'Currently working on a real-time Supply Chain Management project, handling end-to-end full stack development.',
                'Developing robust and type-safe frontend interfaces using TypeScript.',
                'Architecting scalable backend services using Node.js and Express.js, integrated with PostgreSQL for efficient data management.'
            ])
        ]
    );
    await db.run(
        `INSERT INTO experience (role, company, dates, details) VALUES (?, ?, ?, ?)`,
        [
            'Web Developer Intern',
            'Invent Model Technology Solutions',
            'July 2024 – Oct 2024',
            JSON.stringify([
                'Gained practical experience in the software development domain, contributing to the full lifecycle of web-based solutions.',
                'Collaborated with cross-functional teams to define technical requirements and implement features using React.js and backend logic.',
                'Applied software development best practices to design internal tools, significantly enhancing operational efficiency.',
                'Debugged and optimized code modules to ensure high performance and responsiveness across different browsers.'
            ])
        ]
    );

    // Insert Projects
    await db.run(
        `INSERT INTO projects (title, description, technologies, link) VALUES (?, ?, ?, ?)`,
        [
            'Project Management System',
            'Designed a system to streamline team collaboration and task tracking, demonstrating a clear understanding of business logic and data flow. Implemented a database schema to manage user assignments, project timelines, and task status updates. Created a dynamic, interactive dashboard for real-time progress monitoring.',
            'React.js, Node.js, SQL/Mongo',
            'https://project-management-app-main.vercel.app/'
        ]
    );
    await db.run(
        `INSERT INTO projects (title, description, technologies, link) VALUES (?, ?, ?, ?)`,
        [
            'User Feedback System',
            'Built a robust application allowing users to submit feedback with Admin management capabilities. Focused on efficient database connectivity (MongoDB) and secure data handling procedures.',
            'Full Stack Application',
            'https://mern-auth-dashboard-1.onrender.com/'
        ]
    );
    await db.run(
        `INSERT INTO projects (title, description, technologies, link) VALUES (?, ?, ?, ?)`,
        [
            'Invent Model Website Homepage',
            'Developed a responsive homepage using React.js, utilizing Hooks (useState, useEffect) for optimal state management. Implemented reusable components to improve code maintainability and development speed.',
            'Frontend Development',
            'https://inventmodel.com/'
        ]
    );

    await db.run(
        `INSERT INTO projects (title, description, technologies, link) VALUES (?, ?, ?, ?)`,
        [
            'Digital Health Wallet',
            'A full‑stack application to securely store, manage, and share medical reports and vital data. Features include PDF/image uploads, vital tracking with charts (Recharts), and secure sharing capabilities.',
            'React, Node.js, Express, SQLite, React-Bootstrap',
            'https://digital-health-wallet-kappa.vercel.app/login'
        ]
    );

    // Insert Skills
    await db.run(
        `INSERT INTO skills (category, items) VALUES (?, ?)`,
        ['Languages', 'Java, Python, C, JavaScript, TypeScript']
    );
    await db.run(
        `INSERT INTO skills (category, items) VALUES (?, ?)`,
        ['Databases', 'SQL, MongoDB, PostgreSQL']
    );
    await db.run(
        `INSERT INTO skills (category, items) VALUES (?, ?)`,
        ['Web Technologies', 'React.js, Node.js, Express.js, HTML, CSS, Tailwind CSS, Next.js']
    );
    await db.run(
        `INSERT INTO skills (category, items) VALUES (?, ?)`,
        ['Core Concepts', 'SDLC, OOPs, Data Structures & Algorithms (DSA), Agile Methodologies']
    );
    await db.run(
        `INSERT INTO skills (category, items) VALUES (?, ?)`,
        ['Tools & Cloud', 'Git, AWS Cloud Basics, VS Code, Postman']
    );

    console.log('Database seeded successfully');
};

seed().then(() => console.log('Done')).catch(err => console.error(err));
