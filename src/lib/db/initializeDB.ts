import * as mysql from 'mysql2/promise';
import { Environment } from '@/models/common/Environment';
import { Database } from '@/models/db/Database';
import { ENVIRONMENT } from '../config';
import { dbCredentials } from '.';

export async function initializeDB(
  customEnvironment?: Environment
): Promise<Database> {
  const environment = customEnvironment || ENVIRONMENT;

  if (environment !== 'production') {
    const mysqlConnection = await mysql.createConnection({
      host: dbCredentials.host,
      user: dbCredentials.username,
      database: dbCredentials.name,
      port: dbCredentials.port,
      password: dbCredentials.password,
    });

    return new Database(mysqlConnection, {
      mode: 'default',
    });
  }

  const psConnection = await mysql.createConnection(dbCredentials.uri);

  return new Database(psConnection, {
    mode: 'planetscale',
  });
}
