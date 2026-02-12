import express, { Request, Response } from 'express';
import cors from 'cors';
import { initializeDatabase, getDb } from './database';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "https://sumit-shakya-portfolio-uhc7.vercel.app/"
}));
app.use(express.json());

// Routes
app.get('/api/profile', async (req: Request, res: Response) => {
    const db = getDb();
    const profile = await db.get('SELECT * FROM profile LIMIT 1');
    res.json(profile);
});

app.get('/api/education', async (req: Request, res: Response) => {
    const db = getDb();
    const education = await db.all('SELECT * FROM education');
    res.json(education);
});

app.get('/api/experience', async (req: Request, res: Response) => {
    const db = getDb();
    const experience = await db.all('SELECT * FROM experience');
    // Parse details JSON if needed or just return text
    // Assuming details is a stored string, maybe JSON stringified array of bullets
    const formattedExperience = experience.map((exp: any) => ({
        ...exp,
        details: JSON.parse(exp.details)
    }));
    res.json(formattedExperience);
});

app.get('/api/projects', async (req: Request, res: Response) => {
    const db = getDb();
    const projects = await db.all('SELECT * FROM projects');
    // database has description as text, no parsing needed
    res.json(projects);
});

app.get('/api/skills', async (req: Request, res: Response) => {
    const db = getDb();
    const skills = await db.all('SELECT * FROM skills');
    res.json(skills);
});

initializeDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
