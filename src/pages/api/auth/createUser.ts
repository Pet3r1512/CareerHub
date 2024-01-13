import { NextApiRequest, NextApiResponse } from "next";
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const parsedBody = JSON.parse(req.body)
    const {full_name, gender, email, password} = parsedBody.values
    await prisma.user.create({
        data: {
            full_name: full_name,
            gender: gender,
            email: email,
            password: password
        }
    })
    return res.status(200).json({result: "Done",message: "Create New User Successfully!"})
}
