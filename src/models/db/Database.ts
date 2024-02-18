import * as schema from '../../lib/db/schema';
import DatabaseConfig from './DatabaseConfig';
import { DatabaseCredentials } from './DatabaseCredentials';
import postgres from 'postgres';
import DatabaseDriver from './DatabaseDriver';
import { PostgresJsDatabase, drizzle } from 'drizzle-orm/postgres-js';
import * as fs from 'fs';
import * as path from 'path';

function isModuleInstalled(moduleName: string) {
  const nodeModulesPath = path.resolve('node_modules', moduleName);
  try {
    fs.accessSync(nodeModulesPath, fs.constants.R_OK);
    return true;
  } catch (error) {
    return false;
  }
}

function isPostgresInstalled() {
  return isModuleInstalled('postgres');
}

export class Database {
  private dbCredentials: DatabaseCredentials;
  driver: DatabaseDriver;
  // TODO: Create a generic DatabaseClient class
  client: postgres.Sql<{}>;
  config: DatabaseConfig;
  // TODO: Create a generic DatabaseORM class
  drizzle: PostgresJsDatabase<typeof schema>;

  constructor(
    driver: DatabaseDriver,
    config: DatabaseConfig | undefined,
    dbCredentials: DatabaseCredentials
  ) {
    this.dbCredentials = dbCredentials;
    this.driver = driver;
    this.config = config || { mode: 'default' };

    this.client = this.initializeConnection();
    this.drizzle = this.initializeDrizzle();
  }

  // TODO: Create a closeConnection() method
  private initializeConnection() {
    if (!isPostgresInstalled()) {
      throw new Error('Postgres driver not installed (missing postgres)');
    }

    return postgres(this.dbCredentials.uri, { max: 1 });
  }

  private initializeDrizzle() {
    return drizzle(this.client, this.config);
  }
}
