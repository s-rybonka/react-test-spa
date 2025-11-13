import React from 'react';
import { FaReact, FaDocker, FaGithub, FaCode, FaFolder, FaFile, FaCog } from 'react-icons/fa';

export const PageContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  return (
    <div className="container mx-auto px-4 py-8">
      {children}
    </div>
  );
  
};

export const Section: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h1>
      {children}
    </div>
  );
  
};

const features = [
  {
    icon: <FaReact className="text-3xl" />,
    title: 'React 18',
    description: 'Latest version of React with concurrent features and improved performance',
  },
  {
    icon: <FaCode className="text-3xl" />,
    title: 'TypeScript',
    description: 'Type-safe development with TypeScript integration',
  },
  {
    icon: <FaDocker className="text-3xl" />,
    title: 'Docker Support',
    description: 'Containerized development and deployment with Docker',
  },
  {
    icon: <FaGithub className="text-3xl" />,
    title: 'GitHub Integration',
    description: 'Seamless GitHub workflow with templates and actions',
  },
];

const projectStructure = [
  {
    icon: <FaFolder className="text-xl" />,
    name: 'src/',
    description: 'Source code directory',
  },
  {
    icon: <FaFolder className="text-xl" />,
    name: 'public/',
    description: 'Static assets directory',
  },
  {
    icon: <FaFile className="text-xl" />,
    name: 'package.json',
    description: 'Project dependencies and scripts',
  },
  {
    icon: <FaFile className="text-xl" />,
    name: 'tsconfig.json',
    description: 'TypeScript configuration',
  },
  {
    icon: <FaFile className="text-xl" />,
    name: 'Dockerfile',
    description: 'Docker configuration for containerization',
  },
  {
    icon: <FaCog className="text-xl" />,
    name: '.github/',
    description: 'GitHub workflows and templates',
  },
];

export const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  
  return (
    <div className="flex h-full flex-col items-center rounded-lg border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6 shadow-sm">
      <div className="mb-4 text-primary-600 dark:text-primary-400">
        {icon}
      </div>
      <h3 className="mb-2 text-center text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-center text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
  
};

export const ProjectStructureList: React.FC = () => {
  
  return (
    <ul className="space-y-3">
      {projectStructure.map((item, index) => (
        <li key={index} className="flex items-center space-x-3">
          <div className="text-primary-600 dark:text-primary-400">
            {item.icon}
          </div>
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">{item.name}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{item.description}</div>
          </div>
        </li>
      ))}
    </ul>
  );
  
};

export const GridLayout: React.FC<{
  children: React.ReactNode;
  columns?: number;
  gap?: number;
}> = ({ children, columns = 2, gap = 4 }) => {
  
  return (
    <div className={`grid grid-cols-1 gap-${gap} md:grid-cols-${columns}`}>
      {children}
    </div>
  );
  
}; 