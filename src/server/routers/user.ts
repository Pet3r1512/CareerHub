import { PrismaClient } from "@prisma/client";
import { publicProcedure, router } from "../trpc";
import { z } from "zod";

const prisma = new PrismaClient();

export const userRouter = router({
  getUserById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ input }) => {
      prisma.$connect();
      const { id } = input;
      const user = await prisma.user.findFirst({
        where: {
          uuid: id,
        },
      });
      prisma.$disconnect();
      if (user) {
        return user;
      }
      throw new Error();
    }),
  updateUser: publicProcedure
    .input(
      z.object({
        uuid: z.string(),
        full_name: z.string().optional(),
        email: z.string().email().optional(),
        gender: z.string().optional(),
        phone_number: z.string().optional(),
        age: z.number().optional(),
        location: z.string().optional(),
        occupation: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      prisma.$connect();
      const { uuid } = input;
      console.log({ input });
      const user = await prisma.user.findUnique({
        where: {
          uuid: uuid!,
        },
      });
      const updateUser = await prisma.user.update({
        where: {
          uuid: uuid,
        },
        data: {
          ...user,
          ...input,
        },
      });
      prisma.$disconnect();
      if (updateUser) {
        return updateUser;
      }
      throw new Error();
    }),
});

export type AppRouter = typeof userRouter;
