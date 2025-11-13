import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord, FaBook, FaQuestionCircle, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const projectName = '{{ cookiecutter.project_name }}';
  const githubUsername = '{{ cookiecutter.github_username }}';
  const githubRepo = '{{ cookiecutter.github_repo }}';

  const socialLinks = [
    {
      icon: FaGithub,
      url: `https://github.com/${githubUsername}/${githubRepo}`,
      label: 'GitHub',
    },
    {
      icon: FaTwitter,
      url: `https://twitter.com/${githubUsername}`,
      label: 'Twitter',
    },
    {
      icon: FaLinkedin,
      url: `https://linkedin.com/in/${githubUsername}`,
      label: 'LinkedIn',
    },
    {
      icon: FaDiscord,
      url: `https://discord.gg/${githubUsername}`,
      label: 'Discord',
    },
  ];

  const footerLinks = {
    product: [
      { name: 'Features', to: '/features' },
      { name: 'Documentation', to: '/docs', icon: FaBook },
      { name: 'Support', to: '/support', icon: FaQuestionCircle },
      { name: 'Security', to: '/security', icon: FaShieldAlt },
      
      { name: 'Tailwind CSS Docs', to: 'https://tailwindcss.com/docs', icon: FaBook },
      
    ],
    company: [
      { name: 'About', to: '/about' },
      { name: 'Blog', to: '/blog' },
      { name: 'Careers', to: '/careers' },
      { name: 'Contact', to: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', to: '/privacy' },
      { name: 'Terms of Service', to: '/terms' },
      { name: 'Cookie Policy', to: '/cookies' },
      { name: 'License', to: '/license' },
    ],
  };

  
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="text-xl font-bold mb-4">{projectName}</h5>
            <p className="text-gray-400 mb-4">
              Building the future of web applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-4">Product</h5>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-gray-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-4">Company</h5>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-gray-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 my-8"></div>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} {projectName}. All rights reserved.
          </p>
          <p className="text-gray-400">
            Made with ❤️ by {githubUsername}
          </p>
        </div>
      </div>
    </footer>
  );
  
};

export default Footer; 