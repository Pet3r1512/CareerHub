import { publicProcedure, router } from "../trpc";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

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
      }
      throw new Error("Error");
    }),
});
