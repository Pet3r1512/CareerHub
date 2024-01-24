import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import Cors from "cors";
import { runMiddleware } from "@/middlleware/cors";
import { serialize } from 'cookie';
import { generateToken } from "@/utils/auth";
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await runMiddleware(req, res, cors)

    const email = req.body

    try {
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            }
        })
        if(user) {
            const token = generateToken(user.id.toString());
            const cookie = serialize('token', token, {
                path: '/',
                maxAge: 3600, // 1 hour expiration
                sameSite: 'strict',
            });
            res.setHeader('Set-Cookie', cookie);
    
            return res.status(200).json({
                result: "Done",
                message: user?.password,
                user_full_name: user?.full_name
            });
        }
        else {
            return res.status(401).json({
                result: "Error",
                message: "Invalid user credentials",
            });
        }
    }
    catch(error) {
        console.error("Error: ", error)
        return res.status(500).json({
            result: "Error",
            message: "Internal Server Error. Please try again later."
        })
    } finally {
        await prisma.$disconnect();
    }
}