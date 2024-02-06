import { migrate as mysqlMigrate } from 'drizzle-orm/mysql2/migrator';
import { getDB } from '.';

const connectionConfig = {
  migrationsFolder: './migrations',
};

const db = await getDB();

await mysqlMigrate(db.orm, connectionConfig);
