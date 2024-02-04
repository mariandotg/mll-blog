import z from 'zod';
import { getEnvVariable } from './getEnvVariable';

const envSchema = z.object({
  NEXTAUTH_SECRET: z.string().min(1),
  NEXTAUTH_URL: z.string().min(1),
});

const dbCredentialsSchema = z.object({
  host: z.string().min(1),
  name: z.string().min(1),
  username: z.string().min(1),
  password: z.string().min(1),
  port: z.string().min(1),
});

const DATABASE_HOST = getEnvVariable('HOST');
const DATABASE_NAME = getEnvVariable('NAME');
const DATABASE_USERNAME = getEnvVariable('USERNAME');
const DATABASE_PASSWORD = getEnvVariable('PASSWORD');
const DATABASE_PORT = Number(getEnvVariable('PORT'));

const env = envSchema.parse(process.env);

/**
 * Database validated credentials
 */
export const dbCrendentials = dbCredentialsSchema.parse({
  host: DATABASE_HOST,
  name: DATABASE_NAME,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  port: DATABASE_PORT,
});

export const { NEXTAUTH_SECRET, NEXTAUTH_URL } = env;
