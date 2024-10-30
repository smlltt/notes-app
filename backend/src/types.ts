import { Request, Response } from "express";

export type TypedRequest<
  ReqBody = Record<string, unknown>,
  QueryString = Record<string, unknown>
> = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  Partial<ReqBody>,
  Partial<QueryString>
>;

export type TypedResponse<ResBody = any> = Response<ResBody>;

export interface CreateAccountRequestBody {
  fullName: string;
  email: string;
  password: string;
}

export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface AddNoteRequestBody {
  title: string;
  content: string;
  tags?: string[];
  isPinned?: boolean;
}

export interface User {
  _id: string;
  fullName: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface AuthenticatedRequest extends Request {
  user: {
    user: User;
  };
}