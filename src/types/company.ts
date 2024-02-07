export type Company = {
  image: string;
  name: string;
  description: string;
  industry_tags: string[];
  company_size: number;
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
};
