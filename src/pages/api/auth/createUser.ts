import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { runMiddleware } from "@/middleware/cors";
import Cors from "cors";
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  const parsedBody = JSON.parse(req.body);
  const { full_name, gender, email, password } = parsedBody.values;
  try {
    const testRecord = await prisma.user.findFirst({
      where: { email: email },
    });

    if (testRecord) {
      return res.status(409).json({
        result: "Create account failed!",
        message: "Email address is already exists. Please try again.",
      });
    }

    await prisma.user.create({
      data: {
        full_name: full_name,
        gender: gender,
        email: email,
        password: password,
      },
    });

    return res.status(201).json({
      result: "Done",
      message: "Create New User Successfully!",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({
      result: "Error",
      message: "Internal Server Error. Please try again later.",
    });
  } finally {
    // Make sure to disconnect from the Prisma client after using it
    await prisma.$disconnect();
  }
}
