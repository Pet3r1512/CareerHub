import * as trpcNext from "@trpc/server/adapters/next";
import { adminRouter } from "../../../server/routers/admin";
// export API handler
// @link https://trpc.io/docs/v11/server/adapters
export default trpcNext.createNextApiHandler({
  router: adminRouter,
  createContext: () => ({}),
});
