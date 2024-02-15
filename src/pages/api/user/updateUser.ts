import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { runMiddleware } from "@/middleware/cors";
import Cors from "cors";
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

const prisma = new PrismaClient();

function calculateAge(selectedDate: string): number {
    const today = new Date();
    const birthDate = new Date(selectedDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }

function convertToDateObject(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    // Month in JavaScript Date is 0-indexed, so subtract 1
    return new Date(year, month - 1, day);
}

export function generateNext30DaysFromDate(dateTimeString: string): Date {
    const currentDate = new Date(dateTimeString);
    const nextDate = new Date(currentDate.getTime() + (30 * 24 * 60 * 60 * 1000)); // Adding 30 days in milliseconds
  
    return nextDate;
  }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  const parsedBody = JSON.parse(req.body);
  const { uuid, phone_number, birth_day, location, occupation } = parsedBody.values;

  try {
    const user = await prisma.user.findUnique({
        where: {uuid: uuid}
    })

    if(!user) {
        return res.status(401).json({message: "User Not Found!"})
    }
    
    await prisma.user.delete({
      where: {uuid: uuid}
    })

    const newUserDetail = await prisma.userDetail.create({
        data: {
            phone_number: phone_number,
            birth_day: convertToDateObject(birth_day),
            location: location,
            occupation: occupation,
            age: calculateAge(birth_day),
            User : {
                connect: {uuid: uuid}
            }
        }
    })

    if(!newUserDetail) {
        return res.status(400).json({message: "Failed to update information!"})
    }

    return res.status(200).json({message: "Update done!", info: newUserDetail, nextChangeValidOn: generateNext30DaysFromDate(newUserDetail.created_date.toString())})
  }
  catch(error) {
    console.error('Error adding user detail:', error);
  } finally {
    await prisma.$disconnect()
  }
}
