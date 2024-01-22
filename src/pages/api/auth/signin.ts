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
    const data = JSON.parse(req.body)

    const {email, password} = data.values

    try {
        const user = await prisma.user.findFirst({
            where: {AND: [{email}, {password}]}
        })
        console.log(user)
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