import { Project } from '../types';

const hrm: Project = {
  id: 'enigoal-hrm',
  title: 'ENIGOAL HRM & Attendance Management System',
  category: 'Web Applications',
  type: 'Full-Stack Web Application',
  status: 'Private / Local Project',
  description: 'Full-stack HR and attendance platform managing employees, attendance, documents and leave workflows.',
  longDescription: 'A comprehensive enterprise HRM solution built to streamline HR operations. Features role-based access for HR, Managers, and Employees, real-time attendance logging, leave approval workflows, a secure document vault, and instant digital ID card generation.',
  technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST API'],
  features: ['Employee Management & Profiles', 'Digital Employee ID Generation', 'Daily Attendance & History Tracker', 'Leave Request & Approval Workflows', 'Document Vault & Records', 'Role-Based Access Control (RBAC)', 'Interactive Analytics Dashboard', 'Automated Attendance Reports'],
  roles: ['HR Administrator', 'Department Manager', 'Employee'],
  featured: true,
  year: '2025 - 2026',
  liveUrl: 'https://hrm.enigoal.co.in/',
  githubUrl: null,
  isHrmSpecial: true,
};

const site = (id: string, title: string, category: string, description: string, liveUrl: string, technologies: string[]): Project => ({
  id, title, category, type: 'Website', description, technologies, featured: true, year: '2025', liveUrl, githubUrl: null,
});

export const projectsData: Project[] = [
  hrm,
  site('adfarm', 'ADFARM Agritech', 'Agritech', "Corporate website for a technology-driven apple procurement and distribution company, covering AI grading and a transparent supply chain.", 'https://adfarm.co.in/', ['Responsive', 'Corporate Website']),
  site('pushker-society', 'Pushker Society', 'NGO', 'Official platform for Pushker Society showcasing social welfare campaigns, community programs and volunteer enrollment.', 'https://pushkersociety.com/', ['React', 'Tailwind CSS']),
  site('fitness-yog-foundation', 'Fitness Yog Foundation', 'Wellness', 'Calm, responsive portal highlighting yoga sessions, wellness workshops and session enquiries.', 'https://fitnessyogfoundation.in/', ['React', 'Tailwind CSS']),
  site('ganeshnath-dairy', 'Ganeshnath Dairy & Poultry', 'Dairy & Poultry', 'Product website for a Maharashtra dairy and layer poultry farm: fresh milk, paneer, curd, khawa, pedha and eggs.', 'https://ganeshnathdairyandpoultry.com/', ['Responsive', 'Business Website']),
  site('ujwal-mahila', 'Ujwal Mahila Foundation', 'NGO', 'Website for a registered NGO offering free skill-development training, certification and placement support for women and girls.', 'https://ujwalmahilafoundation.in/', ['Responsive', 'NGO Website']),
];
