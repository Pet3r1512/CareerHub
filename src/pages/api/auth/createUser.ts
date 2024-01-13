import { NextApiRequest, NextApiResponse } from "next";
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const parsedBody = JSON.parse(req.body)
    const {full_name, gender, email, password} = parsedBody.values
    const testRecord = await prisma.user.findFirst({
        where: {OR: [{full_name},{email}]}
       });
    if (testRecord) {
        return res.status(409).json({result: "Conflict","message": "Email address already exists. Please try again."})
    }
    await prisma.user.create({
        data: {
            full_name: full_name,
            gender: gender,
            email: email,
            password: password
        }
    })
    return res.status(201).json({result: "Done",message: "Create New User Successfully!"})
}
