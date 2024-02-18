import z from 'zod';
import * as dotenv from 'dotenv';
dotenv.config();

const { NODE_ENV } = process.env;

export const ENVIRONMENT = NODE_ENV;

const envSchema = z.object({
  NEXTAUTH_SECRET: z.string().min(1),
  NEXTAUTH_URL: z.string().min(1),
});

const env = envSchema.parse(process.env);

export const { NEXTAUTH_SECRET, NEXTAUTH_URL } = env;
