import React from 'react';
import WindowCard from '../WindowCard';
import { FolderGit2 } from 'lucide-react';

export default function ProjectsTab() {
  const projects = [
    {
      title: 'Automated CI/CD Portfolio Architecture',
      status: 'Current',
      stack: ['Docker', 'Nginx', 'Linux (Alpine)', 'GitHub Actions'],
      description: 'Architected a containerized web server using Docker. Configured custom Nginx server blocks to enforce strict HTTP security headers. Deployed an automated Continuous Deployment (CD) pipeline linking a GitHub repository to a remote cloud server for zero-downtime updates.'
    },
    {
      title: 'Credtr',
      status: 'Completed',
      stack: ['Flutter', 'Dart', 'Firebase'],
      description: 'A financial tracking mobile application ("Utang"). Integrated with Firebase for real-time data synchronization, user state management, and cross-platform deployment.'
    },
    {
      title: 'Student Management System',
      status: 'Completed',
      stack: ['Python', 'Tkinter', 'SQLite'],
      description: 'Developed a locally hosted management application demonstrating strict Object-Oriented Programming (OOP) principles. Engineered the local database architecture to manage local connections and accurately route student records.'
    },
    {
      title: 'Knowledge Management Integration',
      status: 'Completed',
      stack: ['Kotlin', 'Markdown Data', 'Obsidian'],
      description: 'Built a custom Android widget using Kotlin to extract, parse, and display targeted to-do list data directly from a locally hosted Obsidian vault environment.'
    },
    {
      title: "IVO's Static Web Architecture",
      status: 'Completed',
      stack: ['HTML', 'CSS', 'JavaScript'],
      description: 'Designed and developed a locally hosted, front-end web application utilizing a raw HTML/JS/CSS stack without relying on heavy backend frameworks.'
    }
  ];

  return (
    <div className="h-full w-full">
      <div className="flex items-center space-x-3 mb-6 px-2">
        <FolderGit2 className="text-blue w-6 h-6 md:w-8 md:h-8" />
        <h2 className="text-2xl md:text-3xl font-pixel text-text tracking-wider">~/projects</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 pb-8">
        {projects.map((project, index) => (
          <WindowCard key={index} title={`${project.title.toLowerCase().replace(/\\s+/g, '-')}.sh`} className="h-full min-h-[300px]">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-blue">{project.title}</h3>
                <span className={`text-[10px] px-2 py-1 rounded uppercase tracking-widest font-bold ${project.status === 'Current' ? 'bg-green/20 text-green border border-green/50' :
                  project.status === 'R&D' ? 'bg-peach/20 text-peach border border-peach/50' :
                    'bg-surface2/50 text-subtext1 border border-surface2'
                  }`}>
                  {project.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, i) => (
                  <span key={i} className="text-xs bg-crust text-mauve px-2 py-1 rounded border border-surface0">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex-1 text-sm text-subtext0 leading-relaxed border-t border-surface0 pt-4 mt-auto">
                <span className="text-green mr-2">$</span>
                <span className="text-text opacity-90">{project.description}</span>
              </div>
            </div>
          </WindowCard>
        ))}
      </div>
    </div>
  );
}
