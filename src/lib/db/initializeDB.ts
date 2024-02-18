import { Environment } from '@/models/common/Environment';
import { Database } from '@/models/db/Database';
import { ENVIRONMENT } from '../config';
import { dbCredentials } from '.';
import DatabaseConfig from '@/models/db/DatabaseConfig';

export async function initializeDB(
  customEnvironment?: Environment
): Promise<Database> {
  const environment = customEnvironment || ENVIRONMENT;

  const dbConfig: DatabaseConfig = {
    mode: 'default',
  };

  if (environment !== 'production') {
    return new Database('psql', dbConfig, dbCredentials);
  }

  return new Database('psql', dbConfig, dbCredentials);
}
