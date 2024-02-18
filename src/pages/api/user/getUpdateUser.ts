import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import Cors from "cors";
import { runMiddleware } from "@/middleware/cors";
import { generateNext30DaysFromDate } from "./updateUser";
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);

  const uuid = req.body;

  const user_detail = await prisma.user.findFirst({
    where: {
      uuid: uuid,
    },
  });

  if (user_detail) {
    return res.status(200).json({
      user_detail: user_detail,
      nextChangeValidOn: generateNext30DaysFromDate(
        user_detail.created_date.toString()
      ),
    });
  }
  return res.status(400).json({ message: "User Not Found!" });
}
