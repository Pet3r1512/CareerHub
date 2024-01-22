// Example usage in pages/api/protected.ts
import authenticate from '@/middlleware/auth';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Your logic for handling authenticated requests

  res.status(200).json({ success: true });
};

export default authenticate(handler);
