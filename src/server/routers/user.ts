import { PrismaClient } from "@prisma/client";
import { publicProcedure, router } from "../trpc";
import { z } from "zod";
import hashPassword from "@/lib/hash";

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
  getUserPassword: publicProcedure
    .input(z.object({ id: z.string() }))
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
        return user.password;
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
  updatePassword: publicProcedure
    .input(
      z.object({
        uuid: z.string(),
        new_password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { uuid, new_password } = input;
      let hashed_password = hashPassword(new_password);
      prisma.$connect();
      const update = await prisma.user.update({
        where: {
          uuid: uuid,
        },
        data: {
          password: (await hashed_password).toString(),
        },
      });
      prisma.$disconnect();
      if (update) {
        return true;
      }
      throw new Error();
    }),
});

export type AppRouter = typeof userRouter;
