import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function,
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const parsedBody = JSON.parse(req.body)
  const { full_name, gender, email, password } = parsedBody.values
  try {
    const testRecord = await prisma.user.findFirst({
      where: { OR: [{ full_name }, { email }] }
    });

    if (testRecord) {
      return res.status(409).json({
        result: "Conflict",
        message: "Email address or full name already exists. Please try again."
      });
    }

    await prisma.user.create({
      data: {
        full_name: full_name,
        gender: gender,
        email: email,
        password: password
      }
    });

    return res.status(201).json({
      result: "Done",
      message: "Create New User Successfully!"
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({
      result: "Error",
      message: "Internal Server Error. Please try again later."
    });
  } finally {
    // Make sure to disconnect from the Prisma client after using it
    await prisma.$disconnect();
  }

}
