// pages/api/logout.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { destroyCookie } from 'nookies';

export default (req: NextApiRequest, res: NextApiResponse) => {
    destroyCookie({ res }, 'token');

    return res.status(200).json({ success: true });
};
