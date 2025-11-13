export interface Job {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  salary: number;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  status: 'open' | 'closed' | 'pending';
  createdAt: string;
  updatedAt: string;
}

export interface JobFilters {
  search?: string;
  type?: Job['type'];
  status?: Job['status'];
  location?: string;
  minSalary?: number;
  maxSalary?: number;
}

export interface JobFormData {
  title: string;
  description: string;
  company: string;
  location: string;
  salary: number;
  type: Job['type'];
  status: Job['status'];
}

