import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const adminRouter = router({
  isAdmin: publicProcedure
    .input(
      z.object({
        username: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      prisma.$connect();
      const { username, password } = input;
      const admin = await prisma.admin.findFirst({
        where: {
          username: username,
          password: password,
        },
      });
      prisma.$disconnect();
      if (admin) {
        return admin.name;
      }
      throw new Error();
    }),
});
// export type definition of API
export type AppRouter = typeof adminRouter;
