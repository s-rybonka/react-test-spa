import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useJobs, useDeleteJob } from './useJobs';
import { JobFilters } from './types';
import { toast } from 'react-toastify';
import { FaPlus, FaSearch, FaEdit, FaTrash, FaEye } from 'react-icons/fa';

export const JobsList: React.FC = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<JobFilters>({});
  const [showFilters, setShowFilters] = useState(false);
  const { jobs, loading, error } = useJobs(filters);
  const { deleteJob } = useDeleteJob();

  const filteredJobs = useMemo(() => {
    return jobs;
  }, [jobs]);

  const handleFilterChange = (key: keyof JobFilters, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value || undefined,
    }));
  };

  const clearFilters = () => {
    setFilters({});
  };

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const success = await deleteJob(id);
    if (success) {
      toast.success('Job deleted successfully');
    } else {
      toast.error('Failed to delete job');
    }
  };

  if (loading && jobs.length === 0) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-gray-900 dark:text-white">Loading jobs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent dark:from-primary-400 dark:to-secondary-400">
          Jobs
        </h1>
        <button
          onClick={() => navigate('/jobs/new')}
          className="btn-primary flex items-center"
        >
          <FaPlus className="mr-2" />
          Create Job
        </button>
      </div>

      <div className="card-modern mb-6">
        <div className="flex gap-4 mb-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={filters.search || ''}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="input-modern pl-10"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="btn-secondary"
          >
            {showFilters ? 'Hide' : 'Show'} Filters
          </button>
        </div>

        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Type</label>
              <select
                value={filters.type || ''}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="input-modern"
              >
                <option value="">All Types</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Status</label>
              <select
                value={filters.status || ''}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="input-modern"
              >
                <option value="">All Statuses</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
                <option value="pending">Pending</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Location</label>
              <input
                type="text"
                placeholder="Filter by location"
                value={filters.location || ''}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="input-modern"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Min Salary</label>
              <input
                type="number"
                placeholder="Min salary"
                value={filters.minSalary || ''}
                onChange={(e) => handleFilterChange('minSalary', e.target.value ? parseFloat(e.target.value) : undefined)}
                className="input-modern"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Max Salary</label>
              <input
                type="number"
                placeholder="Max salary"
                value={filters.maxSalary || ''}
                onChange={(e) => handleFilterChange('maxSalary', e.target.value ? parseFloat(e.target.value) : undefined)}
                className="input-modern"
              />
            </div>

            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="w-full btn-secondary"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {error && (
        <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-200 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {filteredJobs.length === 0 ? (
        <div className="card-modern text-center">
          <p className="text-gray-500 dark:text-gray-400">No jobs found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="card-modern cursor-pointer group"
              onClick={() => navigate(`/jobs/${job.id}`)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{job.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{job.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{job.location}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  job.status === 'open' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' :
                  job.status === 'closed' ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300' :
                  'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
                }`}>
                  {job.status}
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
                {job.description}
              </p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  ${job.salary.toLocaleString()}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                  {job.type.replace('-', ' ')}
                </span>
              </div>

              <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/jobs/${job.id}`);
                  }}
                  className="flex-1 btn-primary text-sm py-2 flex items-center justify-center"
                >
                  <FaEye className="mr-2" />
                  View
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/jobs/${job.id}/edit`);
                  }}
                  className="px-3 py-2 bg-gray-600 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={(e) => handleDelete(job.id, e)}
                  className="px-3 py-2 bg-red-600 dark:bg-red-500 text-white rounded-lg hover:bg-red-700 dark:hover:bg-red-600 transition-colors"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

