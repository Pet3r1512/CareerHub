import { NextApiRequest, NextApiResponse } from "next";
import * as bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { plain, hash } = JSON.parse(req.body);

    const result = bcrypt.compareSync(plain, hash);

    if (result) {
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          data: "careerhub",
        },
        "secret"
      );
      return res.status(200).json({
        result: result,
        token: token,
      });
    }

    return res.status(401).json({
      result: result,
      error: "Invalid Credentials",
      message: "The provided password is incorrect.",
    });
  } catch (error) {
    console.error("Error in API route:", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}
