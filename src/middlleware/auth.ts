// middleware/auth.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '../utils/auth';

const authenticate = (
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
) => async (req: NextApiRequest, res: NextApiResponse) => {
  const token =
    req.cookies.token || req.headers.authorization || (req.query && req.query.token as string);

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const userId = verifyToken(token);

  if (!userId) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  return handler(req, res);
};

export default authenticate;
