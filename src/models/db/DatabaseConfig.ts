import { DrizzleConfig } from 'drizzle-orm';
import DatabaseMode from './DatabaseMode';
import * as schema from '../../lib/db/schema';

export default interface DatabaseConfig extends DrizzleConfig<typeof schema> {
  mode: DatabaseMode;
}
