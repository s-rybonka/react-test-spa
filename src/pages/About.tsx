import React from 'react';
import { FaReact, FaNodeJs, FaDocker, FaGithub, FaBook, FaCode, FaTools, FaQuestionCircle, FaStackOverflow, FaDiscord, FaYoutube, FaMedium, FaLaptopCode, FaServer, FaDatabase, FaCloud, FaMobile, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PageContainer, Section, GridLayout, FeatureCard, ProjectStructureList } from '../components/UIComponents';
import { projectConfig } from '../config/project';

export const About = () => {
  const features = [
    {
      icon: FaLaptopCode,
      title: 'Modern Frontend',
      description: 'Built with React, TypeScript, and Vite for optimal performance and developer experience.',
      details: [
        'React 18 with Hooks',
        'TypeScript for type safety',
        'Vite for fast development',
        'Responsive design',
        'Dark/Light mode support'
      ]
    },
    {
      icon: FaServer,
      title: 'Backend Integration',
      description: 'Ready to connect with any backend service or API.',
      details: [
        'RESTful API support',
        'GraphQL ready',
        'Axios for HTTP requests',
        'API error handling',
        'Request interceptors'
      ]
    },
    {
      icon: FaDatabase,
      title: 'Data Management',
      description: 'Efficient state management and data handling.',
      details: [
        'React Context API',
        'Custom hooks',
        'Local storage support',
        'Data caching',
        'Form handling'
      ]
    },
    {
      icon: FaCloud,
      title: 'Deployment Ready',
      description: 'Multiple deployment options and configurations.',
      details: [
        'Docker support',
        'CI/CD pipelines',
        'Environment configuration',
        'Build optimization',
        'Static hosting ready'
      ]
    },
    {
      icon: FaMobile,
      title: 'Mobile First',
      description: 'Optimized for all devices and screen sizes.',
      details: [
        'Responsive layouts',
        'Touch-friendly UI',
        'Progressive Web App ready',
        'Mobile performance',
        'Cross-browser support'
      ]
    },
    {
      icon: FaShieldAlt,
      title: 'Security First',
      description: 'Built with security best practices in mind.',
      details: [
        'XSS protection',
        'CSRF prevention',
        'Secure headers',
        'Input validation',
        'Error boundaries'
      ]
    }
  ];

  const resources = [
    {
      icon: FaBook,
      title: 'Documentation',
      description: 'Comprehensive documentation and guides',
      links: [
        { name: 'Getting Started', url: 'https://react.dev/learn' },
        { name: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/' },
        { name: 'Vite Guide', url: 'https://vitejs.dev/guide/' },
        { name: 'React Router Docs', url: 'https://reactrouter.com/docs/en/v6' },
        { name: 'Tailwind CSS Docs', url: 'https://tailwindcss.com/docs' },
        { name: 'Material UI Docs', url: 'https://mui.com/getting-started/usage/' },
        { name: 'Chakra UI Docs', url: 'https://chakra-ui.com/getting-started' },
        { name: 'Bootstrap Docs', url: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/' }
      ]
    },
    {
      icon: FaCode,
      title: 'Code Examples',
      description: 'Example code and tutorials',
      links: [
        { name: 'React Examples', url: 'https://react.dev/learn/examples' },
        { name: 'TypeScript Examples', url: 'https://www.typescriptlang.org/play' },
        { name: 'Vite Examples', url: 'https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts' },
        { name: 'React Router Examples', url: 'https://reactrouter.com/docs/en/v6/examples' },
        { name: 'Tailwind Examples', url: 'https://tailwindui.com/components' },
        { name: 'Material UI Examples', url: 'https://mui.com/material-ui/getting-started/templates/' },
        { name: 'Chakra UI Examples', url: 'https://chakra-ui.com/getting-started/example' },
        { name: 'Bootstrap Examples', url: 'https://getbootstrap.com/docs/5.3/examples/' }
      ]
    },
    {
      icon: FaTools,
      title: 'Development Tools',
      description: 'Essential tools and utilities',
      links: [
        { name: 'ESLint', url: 'https://eslint.org/docs/latest/' },
        { name: 'Prettier', url: 'https://prettier.io/docs/en/' },
        { name: 'Docker Docs', url: 'https://docs.docker.com/' },
        { name: 'GitHub Actions', url: 'https://docs.github.com/en/actions' },
        { name: 'VS Code Extensions', url: 'https://code.visualstudio.com/docs/editor/extension-marketplace' },
        { name: 'Chrome DevTools', url: 'https://developer.chrome.com/docs/devtools/' },
        { name: 'React DevTools', url: 'https://react.dev/link/react-devtools' },
        { name: 'TypeScript Playground', url: 'https://www.typescriptlang.org/play' }
      ]
    },
    {
      icon: FaQuestionCircle,
      title: 'Support & Community',
      description: 'Get help and support',
      links: [
        { name: 'GitHub Issues', url: `https://github.com/${projectConfig.github.username}/${projectConfig.github.repo}/issues` },
        { name: 'Stack Overflow', url: 'https://stackoverflow.com/questions/tagged/react' },
        { name: 'Discord Community', url: 'https://discord.gg/reactiflux' },
        { name: 'React Forums', url: 'https://reactjs.org/community/support.html' },
        { name: 'TypeScript Community', url: 'https://www.typescriptlang.org/community' },
        { name: 'Vite Community', url: 'https://vitejs.dev/community/' },
        { name: 'Tailwind Community', url: 'https://tailwindcss.com/community' },
        { name: 'Material UI Community', url: 'https://mui.com/material-ui/getting-started/community/' }
      ]
    },
    {
      icon: FaYoutube,
      title: 'Video Tutorials',
      description: 'Learn from video content',
      links: [
        { name: 'React Tutorials', url: 'https://www.youtube.com/results?search_query=react+tutorial' },
        { name: 'TypeScript Tutorials', url: 'https://www.youtube.com/results?search_query=typescript+tutorial' },
        { name: 'Vite Tutorials', url: 'https://www.youtube.com/results?search_query=vite+tutorial' },
        { name: 'Tailwind CSS Tutorials', url: 'https://www.youtube.com/results?search_query=tailwind+css+tutorial' },
        { name: 'Material UI Tutorials', url: 'https://www.youtube.com/results?search_query=material+ui+tutorial' },
        { name: 'Chakra UI Tutorials', url: 'https://www.youtube.com/results?search_query=chakra+ui+tutorial' },
        { name: 'Bootstrap Tutorials', url: 'https://www.youtube.com/results?search_query=bootstrap+tutorial' },
        { name: 'React Router Tutorials', url: 'https://www.youtube.com/results?search_query=react+router+tutorial' }
      ]
    },
    {
      icon: FaMedium,
      title: 'Blog Posts',
      description: 'Articles and blog posts',
      links: [
        { name: 'React Blog', url: 'https://reactjs.org/blog' },
        { name: 'TypeScript Blog', url: 'https://devblogs.microsoft.com/typescript/' },
        { name: 'Vite Blog', url: 'https://vitejs.dev/blog/' },
        { name: 'Tailwind Blog', url: 'https://blog.tailwindcss.com/' },
        { name: 'Material UI Blog', url: 'https://mui.com/blog/' },
        { name: 'Chakra UI Blog', url: 'https://blog.chakra-ui.com/' },
        { name: 'Bootstrap Blog', url: 'https://blog.getbootstrap.com/' },
        { name: 'React Router Blog', url: 'https://reactrouter.com/blog' }
      ]
    }
  ];

  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">About {projectConfig.name}</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        {projectConfig.description}
      </p>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                  <feature.icon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center">
                    <FaCode className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 my-12"></div>

      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Resources & Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <div className="flex items-center mb-4">
              <resource.icon className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{resource.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {resource.description}
            </p>
            <ul className="space-y-2">
              {resource.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Project Repository</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <Link
            href={`https://github.com/${projectConfig.github.username}/${projectConfig.github.repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            {`${projectConfig.github.username}/${projectConfig.github.repo}`}
          </Link>
        </div>
      </div>
    </div>
  );
  
}; 
