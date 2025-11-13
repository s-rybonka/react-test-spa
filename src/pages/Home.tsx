import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer, Section, GridLayout, FeatureCard } from '../components/UIComponents';
import { projectConfig } from '../config/project';
import { FaReact, FaNodeJs, FaDocker, FaGithub, FaCode, FaCog, FaFolder, FaFile } from 'react-icons/fa';

export const Home = () => {
  const features = [
    {
      icon: FaReact,
      title: 'React 18',
      description: 'Latest version of React with concurrent features and improved performance',
    },
    {
      icon: FaNodeJs,
      title: 'TypeScript',
      description: 'Type-safe development with TypeScript integration',
    },
    {
      icon: FaDocker,
      title: 'Docker Support',
      description: 'Containerized development and deployment with Docker',
    },
    {
      icon: FaGithub,
      title: 'GitHub Integration',
      description: 'Seamless GitHub workflow with templates and actions',
    },
    {
      icon: FaCode,
      title: 'Modern UI Framework',
      description: `Tailwind CSS for utility-first styling`,
    },
    {
      icon: FaCog,
      title: 'Development Tools',
      description: 'ESLint, Prettier, and TypeScript for code quality and consistency',
    },
    {
      icon: FaFolder,
      title: 'Project Structure',
      description: 'Well-organized project structure following best practices',
    },
    {
      icon: FaFile,
      title: 'Documentation',
      description: 'Comprehensive documentation and setup instructions',
    },
  ];

  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-400 bg-clip-text text-transparent dark:from-primary-400 dark:via-secondary-400 dark:to-primary-300">
          Welcome to {projectConfig.name}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {projectConfig.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="card-modern group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Documentation & Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
          >
            <FaReact className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            React Docs
          </a>
          <a
            href="https://www.typescriptlang.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
          >
            <FaNodeJs className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            TypeScript Docs
          </a>
          <a
            href="https://docs.docker.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
          >
            <FaDocker className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Docker Docs
          </a>
          <a
            href="https://github.com/features/actions"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
          >
            <FaGithub className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            GitHub Actions
          </a>
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/about"
          className="btn-primary inline-flex items-center"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
  
}; 
