// convex/convex.config.ts
import { defineApp } from "convex/server";
import ratelimiter from "@convex-dev/ratelimiter/convex.config";

const app = defineApp();
app.use(ratelimiter);

export default app;