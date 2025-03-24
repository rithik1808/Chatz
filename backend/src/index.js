import express from "express";
import authRoutes from "./routes/auth.route.js";
import dontenv from "dotenv";
import { connectDB } from "./lib/db.js";

dontenv.config();
const app = express();

const PORT = process.env.PORT || 5001;
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  connectDB();
});
