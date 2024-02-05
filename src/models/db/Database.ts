import { Connection } from 'mysql2/promise';
import {
  MySql2DrizzleConfig,
  MySql2PreparedQueryHKT,
  MySql2QueryResultHKT,
  MySqlDatabase,
  drizzle,
} from 'drizzle-orm/mysql2';
import * as schema from '../../lib/db/schema';
import { ExtractTablesWithRelations } from 'drizzle-orm';
import DatabaseConfig from './DatabaseConfig';

export class Database {
  client: Connection;
  config: DatabaseConfig;
  orm: MySqlDatabase<
    MySql2QueryResultHKT,
    MySql2PreparedQueryHKT,
    typeof schema,
    ExtractTablesWithRelations<typeof schema>
  >;

  constructor(client: Connection, config: DatabaseConfig | undefined) {
    this.client = client;
    this.config = config || { mode: 'default' };
    this.orm = drizzle(this.client, this.config);
  }
}
