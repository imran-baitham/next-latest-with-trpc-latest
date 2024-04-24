import { postRouter } from "./routers/post";
import { createCallerFactory, createTRPCRouter, publicProcedure } from "./trpc";

// export const appRouter = createTRPCRouter({
// getUserName: publicProcedure.query(() => {
//   return { username: "jone-smit" };
// }),
// });

export const appRouter = createTRPCRouter({
  post: postRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
