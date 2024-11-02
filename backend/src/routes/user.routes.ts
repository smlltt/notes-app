import express from "express";
import { createAccount, getUser, login } from "../controllers/user.controller";
import { authenticateToken } from "../middlewares/authenticateToken";
const router = express.Router();

router.post("/create-account", createAccount);
router.post("/login", login);
router.get("/user", authenticateToken, getUser);

export default router;
