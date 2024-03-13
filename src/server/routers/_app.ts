import { router } from "../trpc";
import { adminRouter } from "./admin";
import { userRouter } from "./user";

export const appRouter = router({
  admin: adminRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
