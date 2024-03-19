import { publicProcedure, router } from "../trpc";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import otpGenerator from "otp-generator";

const prisma = new PrismaClient();

export const authenticationRouter = router({
  forgotPassword: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
      })
    )
    .mutation(async ({ input }) => {
      prisma.$connect();
      const { email } = input;
      const user = await prisma.user.findFirst({
        where: {
          email: email,
        },
      });
      prisma.$disconnect();
      if (user) {
        const otp = otpGenerator.generate(6, {
          upperCaseAlphabets: false,
          specialChars: false,
        });
        const message = {
          from: "CareerHub@service.com",
          to: email,
          subject: "Forgot Password OTP",
          text: otp,
          html: `<p>${otp}</p>`,
        };
      }
      throw new Error("Error");
    }),
});
