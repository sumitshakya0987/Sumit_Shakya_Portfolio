import axios from 'axios';
import type { Profile, Education, Experience, Project, Skill } from '../types';

const API_URL = 'https://sumit-shakya-portfolio.onrender.com';

export const getProfile = async (): Promise<Profile> => {
    const response = await axios.get(`${API_URL}/profile`);
    return response.data;
};

export const getEducation = async (): Promise<Education[]> => {
    const response = await axios.get(`${API_URL}/education`);
    return response.data;
};

export const getExperience = async (): Promise<Experience[]> => {
    const response = await axios.get(`${API_URL}/experience`);
    return response.data;
};

export const getProjects = async (): Promise<Project[]> => {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
};

export const getSkills = async (): Promise<Skill[]> => {
    const response = await axios.get(`${API_URL}/skills`);
    return response.data;
};
