import { NextRequest } from "next/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/trpc";
import { createTRPCContext } from "@/trpc/trpc";

const createContext = async (req: NextRequest) => {
  return createTRPCContext({
    headers: req.headers,
  });
};

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    req,
    router: appRouter,
    endpoint: "/api/trpc",
    createContext: () => createContext(req),
    // onError:
    //   env.NODE_ENV === "development"
    //     ? ({ path, error }) => {
    //         console.error(
    //           `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
    //         );
    //       }
    //     : undefined,
  });

export { handler as GET, handler as POST };
