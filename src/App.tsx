import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavbarComponent } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Jobs } from './pages/jobs';
import { projectConfig } from './config/project';
import UIFrameworkCard from './components/UIFrameworkCard';



const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <NavbarComponent projectName={projectConfig.name} />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <UIFrameworkCard />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs/*" element={<Jobs />} />
          </Routes>
        </div>
      </main>
      <ToastContainer 
        position="top-right" 
        autoClose={3000}
        toastClassName="dark:bg-gray-800 dark:text-gray-100"
        progressClassName="bg-primary-500"
      />
    </div>
  );
};

export default App; 