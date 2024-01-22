import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import Cors from "cors";
import { runMiddleware } from "@/middlleware/cors";
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
            console.log(user)
            return res.status(200).json({
                result: "Done",
                message: user?.password
            })
        }
        return res.status(201).json({
            result: "Error",
            message: "User not found!"
        })
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