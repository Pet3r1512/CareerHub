import hashPassword from "@/lib/hash";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = await hashPassword(req.body)
    return res.status(200).json({hashedPassword: data})
}