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

function convertToDateObject(dateString: string): Date {
  const [year, month, day] = dateString.split("-").map(Number);
  // Month in JavaScript Date is 0-indexed, so subtract 1
  return new Date(year, month - 1, day);
}

export function generateNext30DaysFromDate(dateTimeString: string): Date {
  const currentDate = new Date(dateTimeString);
  const nextDate = new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000); // Adding 30 days in milliseconds

  return nextDate;
}

function getTodayDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
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
        birth_day: birth_day + "T12:00:00Z",
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
      nextChangeValidOn: generateNext30DaysFromDate(
        updateUser.created_date.toString()
      ),
    });
  } catch (error) {
    return res.status(400).json({ message: error });
  } finally {
    prisma.$disconnect();
  }
}
