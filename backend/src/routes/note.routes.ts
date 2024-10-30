import express from "express";
import {
  addNote,
  deleteNote,
  editNote,
  getNotes,
} from "../controllers/note.controller";
import { authenticateToken } from "../middlewares/authenticateToken";

const router = express.Router();

router.post("/add", authenticateToken, addNote);
router.put("/edit/:noteId", authenticateToken, editNote);
router.get("/notes", authenticateToken, getNotes);
router.delete("/delete/:noteId", authenticateToken, deleteNote);

export default router;
