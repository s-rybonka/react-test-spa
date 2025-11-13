import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { JobsList } from './JobsList';
import { JobDetail } from './JobDetail';
import { JobForm } from './JobForm';

export const Jobs: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<JobsList />} />
      <Route path="/new" element={<JobForm />} />
      <Route path="/:id" element={<JobDetail />} />
      <Route path="/:id/edit" element={<JobForm />} />
      <Route path="*" element={<Navigate to="/jobs" replace />} />
    </Routes>
  );
};

