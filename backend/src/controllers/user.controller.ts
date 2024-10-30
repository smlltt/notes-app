import bcrypt from "bcrypt";
import User from "../models/user.models";
import jwt from "jsonwebtoken";
import { Secret } from "jsonwebtoken";
import envConfig from "../envConfig";
import {
  TypedRequest,
  CreateAccountRequestBody,
  LoginRequestBody,
} from "../types";
import { Response } from "express";

export const createAccount = async (
  req: TypedRequest<CreateAccountRequestBody>,
  res: Response
): Promise<any> => {
  const { fullName, email, password } = req.body;

  if (!fullName) {
    return res.status(400).json({
      error: true,
      message: "Name required.",
    });
  }
  if (!email) {
    return res.status(400).json({
      error: true,
      message: "Email required.",
    });
  }
  if (!password) {
    return res.status(400).json({
      error: true,
      message: "Password required.",
    });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: true, message: "Email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ fullName, email, password: hashedPassword });
    await user.save();

    const accessToken = jwt.sign(
      { user },
      envConfig.accessTokenSecret as Secret,
      { expiresIn: "30m" }
    );
    return res.json({
      error: false,
      user,
      accessToken,
      message: "Registration successful",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
};

export const login = async (
  req: TypedRequest<LoginRequestBody>,
  res: Response
): Promise<any> => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: true,
      message: "Email, and password are required.",
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(409)
        .json({ error: true, message: "No account with this email." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password); 

    if (isPasswordValid) {
      const accessToken = jwt.sign(
        { user },
        envConfig.accessTokenSecret as Secret,
        {
          expiresIn: "30m",
        }
      );
      return res.json({
        error: false,
        email: user.email,
        accessToken,
        message: "Login successful",
      });
    } else {
      return res
        .status(409)
        .json({ error: true, message: "Invalid password." });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
};
