import { NextApiRequest, NextApiResponse } from "next";
import { advices_blogs } from "@/data/advices/advice-blogs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    return res.status(200).json({ blogs: advices_blogs });
  } catch (error) {
    console.error("Error in API route:", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}
