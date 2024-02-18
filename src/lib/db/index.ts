import { Environment } from '@/models/common/Environment';
import { Database } from '@/models/db/Database';
import { initializeDB } from './initializeDB';
import z from 'zod';
import { getDbCredential } from '../getDbCredential';

let dbInstance: Database | null = null;

export async function getDB(customEnvironment?: Environment) {
  if (!dbInstance) {
    dbInstance = await initializeDB(customEnvironment);
  }

  return dbInstance;
}

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
const DATABASE_URI = `postgres://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;

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
