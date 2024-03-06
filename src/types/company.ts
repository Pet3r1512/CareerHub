export type Company = {
  id: string;
  image_url: string;
  name: string;
  founded_data: string;
  description: string;
  location: string;
  industry_tags: string;
  company_size: number;
  created_by_id: string;
  remaining_jobs_count: number;
};

export type Job = {
  title: string;
  employment_type: string;
  company: {
    name: string;
    image: string;
    location: {
      city: string;
      country: string;
    };
  };
  description: string;
  tags: string[];
  capacity: number;
  applied: number;
  job_level: string;
  salary_range: number;
};

export type EmploymentType = {
  type: string;
  count: number;
};

export type JobCategory = {
  category: string;
  count: number;
};

export type JobLevel = {
  level: string;
  count: number;
};

export type SalaryRange = {
  range: string;
  count: number;
};
