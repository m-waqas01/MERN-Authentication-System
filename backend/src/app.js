import express from "express";
import cors from "cors";

import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

app.use(cors());

// Routes
app.use("/api", userRoutes);

export default app;
