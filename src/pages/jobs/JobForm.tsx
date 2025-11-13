import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { JobFormData } from './types';
import { useCreateJob, useUpdateJob, useJob } from './useJobs';
import { toast } from 'react-toastify';

interface JobFormProps {
  onSuccess?: () => void;
}

export const JobForm: React.FC<JobFormProps> = ({ onSuccess }) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { job, loading: loadingJob } = useJob(id || '');
  const { createJob, loading: creating } = useCreateJob();
  const { updateJob, loading: updating } = useUpdateJob();
  
  const [formData, setFormData] = useState<JobFormData>({
    title: '',
    description: '',
    company: '',
    location: '',
    salary: 0,
    type: 'full-time',
    status: 'open',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof JobFormData, string>>>({});

  useEffect(() => {
    if (job) {
      setFormData({
        title: job.title,
        description: job.description,
        company: job.company,
        location: job.location,
        salary: job.salary,
        type: job.type,
        status: job.status,
      });
    }
  }, [job]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof JobFormData, string>> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (formData.salary < 0) {
      newErrors.salary = 'Salary must be positive';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      toast.error('Please fix validation errors');
      return;
    }

    try {
      if (id && job) {
        const updated = await updateJob(id, formData);
        if (updated) {
          toast.success('Job updated successfully');
          if (onSuccess) {
            onSuccess();
          } else {
            navigate('/jobs');
          }
        }
      } else {
        const created = await createJob(formData);
        if (created) {
          toast.success('Job created successfully');
          if (onSuccess) {
            onSuccess();
          } else {
            navigate('/jobs');
          }
        }
      }
    } catch (error) {
      toast.error('An error occurred');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'salary' ? parseFloat(value) || 0 : value,
    }));
    if (errors[name as keyof JobFormData]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof JobFormData];
        return newErrors;
      });
    }
  };

  const loading = creating || updating || loadingJob;

  if (id && loadingJob) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-gray-900 dark:text-white">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="card-modern">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent dark:from-primary-400 dark:to-secondary-400">
          {id ? 'Edit Job' : 'Create New Job'}
        </h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`input-modern ${
                errors.title ? 'border-red-500 focus:ring-red-500' : ''
              }`}
            />
            {errors.title && (
              <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className={`input-modern ${
                errors.description ? 'border-red-500 focus:ring-red-500' : ''
              }`}
            />
            {errors.description && (
              <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
                Company *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={`input-modern ${
                  errors.company ? 'border-red-500 focus:ring-red-500' : ''
                }`}
              />
              {errors.company && (
                <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.company}</p>
              )}
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={`input-modern ${
                  errors.location ? 'border-red-500 focus:ring-red-500' : ''
                }`}
              />
              {errors.location && (
                <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.location}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="salary" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
                Salary *
              </label>
              <input
                type="number"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                min="0"
                className={`input-modern ${
                  errors.salary ? 'border-red-500 focus:ring-red-500' : ''
                }`}
              />
              {errors.salary && (
                <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.salary}</p>
              )}
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
                Type *
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="input-modern"
              >
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
                Status *
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="input-modern"
              >
                <option value="open">Open</option>
                <option value="closed">Closed</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Saving...' : id ? 'Update Job' : 'Create Job'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/jobs')}
              className="btn-secondary"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

