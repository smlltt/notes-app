import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes";
import noteRoutes from "./routes/note.routes";
import envConfig from "./envConfig";

dotenv.config();

mongoose.connect(envConfig.dataBaseUrl as string);

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
  res.json({ data: "Hello, TypeScript with Express!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
