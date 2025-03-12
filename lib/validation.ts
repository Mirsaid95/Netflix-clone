import { z } from "zod";

export const loginAccountSchema = z.object({
  password: z.string().min(8),
});

export const createAccountSchema = z.object({
  name: z.string().min(6).max(10),
  password: z.string().min(4).max(10),
});

