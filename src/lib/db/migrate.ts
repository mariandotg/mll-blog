import { migrate as pgMigrate } from 'drizzle-orm/postgres-js/migrator';
import { getDB } from '.';

const connectionConfig = {
  migrationsFolder: 'src/lib/db/migrations',
};

const db = await getDB();

await pgMigrate(db.drizzle, connectionConfig);

await db.client.end();
