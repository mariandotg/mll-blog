import z from 'zod';
import { getDbCredential } from './getDbCredential';

const envSchema = z.object({
  NEXTAUTH_SECRET: z.string().min(1),
  NEXTAUTH_URL: z.string().min(1),
});

const dbCredentialsSchema = z.object({
  host: z.string().min(1),
  name: z.string().min(1),
  username: z.string().min(1),
  password: z.string().min(1),
  port: z.number().nonnegative(),
  uri: z.string().min(1),
});

const DATABASE_HOST = getDbCredential('HOST');
const DATABASE_NAME = getDbCredential('NAME');
const DATABASE_USERNAME = getDbCredential('USERNAME');
const DATABASE_PASSWORD = getDbCredential('PASSWORD');
const DATABASE_PORT = Number(getDbCredential('PORT'));
const DATABASE_URI = `mysql://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATABASE_NAME}?ssl={"rejectUnauthorized":true}`;

const env = envSchema.parse(process.env);

/**
 * Database validated credentials
 */
export const dbCredentials = dbCredentialsSchema.parse({
  host: DATABASE_HOST,
  name: DATABASE_NAME,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  port: DATABASE_PORT,
  uri: DATABASE_URI,
});

export const { NEXTAUTH_SECRET, NEXTAUTH_URL } = env;
