import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import Cors from "cors";
import { runMiddleware } from "@/middleware/cors";
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    await runMiddleware(req, res, cors);

    const uuid = req.body

    const user = await prisma.user.findUnique({
        where: {
            uuid: uuid
        }
    })

    if(user) {
        return res.status(200).json({user: user})
    }
    return res.status(400).json({message: "User Not Found!"})
}
