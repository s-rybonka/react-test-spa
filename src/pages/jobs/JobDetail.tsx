import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useJob, useDeleteJob } from './useJobs';
import { toast } from 'react-toastify';
import { FaEdit, FaTrash, FaArrowLeft, FaMapMarkerAlt, FaDollarSign, FaBriefcase } from 'react-icons/fa';

export const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { job, loading, error } = useJob(id || '');
  const { deleteJob, loading: deleting } = useDeleteJob();

  const handleDelete = async () => {
    if (!id) return;
    
    const success = await deleteJob(id);
    if (success) {
      toast.success('Job deleted successfully');
      navigate('/jobs');
    } else {
      toast.error('Failed to delete job');
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-gray-900 dark:text-white">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-red-500 dark:text-red-400">{error || 'Job not found'}</p>
          <button
            onClick={() => navigate('/jobs')}
            className="mt-4 btn-primary"
          >
            Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate('/jobs')}
        className="mb-4 flex items-center text-blue-600 hover:text-blue-700"
      >
        <FaArrowLeft className="mr-2" />
        Back to Jobs
      </button>

      <div className="card-modern">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">{job.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">{job.company}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => navigate(`/jobs/${job.id}/edit`)}
              className="btn-primary flex items-center"
            >
              <FaEdit className="mr-2" />
              Edit
            </button>
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="px-4 py-2 bg-red-600 dark:bg-red-500 text-white rounded-lg hover:bg-red-700 dark:hover:bg-red-600 flex items-center disabled:opacity-50 transition-colors"
            >
              <FaTrash className="mr-2" />
              {deleting ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-900 dark:text-white">{job.location}</span>
            </div>
            <div className="flex items-center">
              <FaDollarSign className="mr-2 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-900 dark:text-white">${job.salary.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <FaBriefcase className="mr-2 text-gray-500 dark:text-gray-400" />
              <span className="capitalize text-gray-900 dark:text-white">{job.type.replace('-', ' ')}</span>
            </div>
            <div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                job.status === 'open' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' :
                job.status === 'closed' ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300' :
                'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
              }`}>
                {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
              </span>
            </div>
          </div>

          <div className="border-t pt-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Description</h2>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
              {job.description}
            </p>
          </div>

          <div className="border-t pt-4 text-sm text-gray-500 dark:text-gray-400">
            <p>Created: {new Date(job.createdAt).toLocaleDateString()}</p>
            <p>Updated: {new Date(job.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

