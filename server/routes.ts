import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertReviewSchema, insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/reviews", async (req, res) => {
    try {
      const data = insertReviewSchema.parse(req.body);
      const review = await storage.createReview(data);
      res.json(review);
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json({ message: "Invalid review data" });
        return;
      }
      res.status(500).json({ message: "Failed to create review" });
    }
  });

  app.get("/api/reviews", async (_req, res) => {
    try {
      const reviews = await storage.getReviews();
      res.json(reviews);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch reviews" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(data);
      res.json(contact);
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json({ message: "Invalid contact data" });
        return;
      }
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
