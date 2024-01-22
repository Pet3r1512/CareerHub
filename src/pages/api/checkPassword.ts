import { NextApiRequest, NextApiResponse } from "next";
import * as bcrypt from 'bcrypt';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {plain, hash} = JSON.parse(req.body)
    const result = bcrypt.compareSync(plain, hash)
    console.log(result)
    return res.status(200).json({
        result: result
    })
}
