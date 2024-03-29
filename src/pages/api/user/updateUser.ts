import { runMiddleware } from "@/middleware/cors";
import Cors from "cors";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

const prisma = new PrismaClient();

function calculateAge(selectedDate: string): number {
  const today = new Date();
  const birthDate = new Date(selectedDate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  const parsedBody = JSON.parse(req.body);
  const { birth_day, location, occupation, phone_number, uuid } =
    parsedBody.values;
  try {
    const updateUser = await prisma.user.update({
      where: {
        uuid: uuid,
      },
      data: {
        phone_number: phone_number,
        location: location,
        occupation: occupation,
        age: calculateAge(birth_day),
      },
    });

    if (!updateUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({
      message: "Update done!",
      user: updateUser,
    });
  } catch (error) {
    return res.status(400).json({ message: error });
  } finally {
    prisma.$disconnect();
  }
}
