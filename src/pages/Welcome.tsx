import React from 'react';
import { FaReact, FaNodeJs, FaDocker, FaGithub, FaCode, FaCog, FaFolder, FaFile } from 'react-icons/fa';
import { PageContainer, Section, GridLayout, FeatureCard } from '../components/UIComponents';

const Welcome: React.FC = () => {
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
      <h1 className="text-3xl font-bold mb-4">{`Welcome to {{ cookiecutter.project_name }}`}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
        {`{{ cookiecutter.project_description }}`}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center"
          >
            <feature.icon className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Welcome;
