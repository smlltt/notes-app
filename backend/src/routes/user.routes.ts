import express from "express";
import { createAccount, login } from "../controllers/user.controller";
const router = express.Router();

router.post("/create-account", createAccount);
router.post("/login", login);

export default router;
