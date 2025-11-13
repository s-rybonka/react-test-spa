import { useState, useEffect } from 'react';
import { Job, JobFilters, JobFormData } from './types';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    description: 'We are looking for an experienced frontend developer',
    company: 'Tech Corp',
    location: 'New York',
    salary: 120000,
    type: 'full-time',
    status: 'open',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'React Developer',
    description: 'Join our team to build amazing React applications',
    company: 'StartupXYZ',
    location: 'San Francisco',
    salary: 100000,
    type: 'full-time',
    status: 'open',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const useJobs = (filters?: JobFilters) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        await delay(500);
        let filtered = [...mockJobs];
        
        if (filters?.search) {
          filtered = filtered.filter(job => 
            job.title.toLowerCase().includes(filters.search!.toLowerCase()) ||
            job.description.toLowerCase().includes(filters.search!.toLowerCase())
          );
        }
        
        if (filters?.type) {
          filtered = filtered.filter(job => job.type === filters.type);
        }
        
        if (filters?.status) {
          filtered = filtered.filter(job => job.status === filters.status);
        }
        
        if (filters?.location) {
          filtered = filtered.filter(job => 
            job.location.toLowerCase().includes(filters.location!.toLowerCase())
          );
        }
        
        if (filters?.minSalary) {
          filtered = filtered.filter(job => job.salary >= filters.minSalary!);
        }
        
        if (filters?.maxSalary) {
          filtered = filtered.filter(job => job.salary <= filters.maxSalary!);
        }
        
        if (!cancelled) {
          setJobs(filtered);
        }
      } catch (err) {
        if (!cancelled) {
          setError('Failed to fetch jobs');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchJobs();
    
    return () => {
      cancelled = true;
    };
  }, [filters]);

  return { jobs, loading, error };
};

export const useJob = (id: string) => {
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      setLoading(true);
      setError(null);
      try {
        await delay(300);
        const found = mockJobs.find(j => j.id === id);
        if (!found) {
          setError('Job not found');
        } else {
          setJob(found);
        }
      } catch (err) {
        setError('Failed to fetch job');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchJob();
    }
  }, [id]);

  return { job, loading, error };
};

export const useCreateJob = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createJob = async (data: JobFormData): Promise<Job | null> => {
    setLoading(true);
    setError(null);
    try {
      await delay(500);
      const newJob: Job = {
        id: Date.now().toString(),
        ...data,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      mockJobs.push(newJob);
      return newJob;
    } catch (err) {
      setError('Failed to create job');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { createJob, loading, error };
};

export const useUpdateJob = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateJob = async (id: string, data: Partial<JobFormData>): Promise<Job | null> => {
    setLoading(true);
    setError(null);
    try {
      await delay(500);
      const index = mockJobs.findIndex(j => j.id === id);
      if (index === -1) {
        setError('Job not found');
        return null;
      }
      mockJobs[index] = {
        ...mockJobs[index],
        ...data,
        updatedAt: new Date().toISOString(),
      };
      return mockJobs[index];
    } catch (err) {
      setError('Failed to update job');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { updateJob, loading, error };
};

export const useDeleteJob = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteJob = async (id: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      await delay(300);
      const index = mockJobs.findIndex(j => j.id === id);
      if (index === -1) {
        setError('Job not found');
        return false;
      }
      mockJobs.splice(index, 1);
      return true;
    } catch (err) {
      setError('Failed to delete job');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { deleteJob, loading, error };
};

