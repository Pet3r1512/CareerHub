// pages/api/logout.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { destroyCookie } from 'nookies';

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader(
        "Set-Cookie", [
            'token; Max-Age=0; path=/auth/signin'
        ]
    )

    return res.status(200).json({ success: true });
};
