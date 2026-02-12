import express, { Request, Response } from 'express';
import seed from './seed';
import cors from 'cors';
import { initializeDatabase, getDb } from './database';


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "*"
}));
app.use(express.json());

// Routes

app.get('/api/profile', async (req: Request, res: Response) => {
  try {
    const db = getDb();
    const profile = await db.get('SELECT * FROM profile LIMIT 1');
    res.json(profile || {});
  } catch (error) {
    console.error("Profile route error:", error);
    res.status(500).json({ error: "Failed to fetch profile" });
  }
});

app.get('/api/education', async (req: Request, res: Response) => {
  try {
    const db = getDb();
    const education = await db.all('SELECT * FROM education');
    res.json(education || []);
  } catch (error) {
    console.error("Education route error:", error);
    res.status(500).json({ error: "Failed to fetch education" });
  }
});

app.get('/api/experience', async (req: Request, res: Response) => {
  try {
    const db = getDb();
    const experience = await db.all('SELECT * FROM experience');

    const formattedExperience = experience.map((exp: any) => ({
      ...exp,
      details: exp.details ? JSON.parse(exp.details) : []
    }));

    res.json(formattedExperience);
  } catch (error) {
    console.error("Experience route error:", error);
    res.status(500).json({ error: "Failed to fetch experience" });
  }
});

app.get('/api/projects', async (req: Request, res: Response) => {
  try {
    const db = getDb();
    const projects = await db.all('SELECT * FROM projects');
    res.json(projects || []);
  } catch (error) {
    console.error("Projects route error:", error);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

app.get('/api/skills', async (req: Request, res: Response) => {
  try {
    const db = getDb();
    const skills = await db.all('SELECT * FROM skills');
    res.json(skills || []);
  } catch (error) {
    console.error("Skills route error:", error);
    res.status(500).json({ error: "Failed to fetch skills" });
  }
});


const startServer = async () => {
  try {
    await initializeDatabase();
    console.log("Database initialized");

    await seed();
    console.log("Database seeded");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

