import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "../server/routes";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

// Helper to handle init only once
let initialized = false;

async function setup() {
  if (initialized) return;

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Register routes
  // We pass the httpServer even though it won't listen, 
  // because registerRoutes expects it.
  await registerRoutes(httpServer, app);

  // Global error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  initialized = true;
}

export default async function handler(req: Request, res: Response) {
  await setup();
  return app(req, res);
}
