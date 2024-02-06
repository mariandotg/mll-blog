import type { Config } from 'drizzle-kit';
import { dbCredentials } from '@/lib/db';
import { ENVIRONMENT } from '@/lib/config';
import { Environment } from '@/models/common/Environment';

const { port, host, username, password, name, uri } = dbCredentials;

const baseConfig: Config = {
  schema: './src/lib/db/schema.ts',
  out: './src/lib/db/migrations',
  tablesFilter: ['mll_blog_*'],
  schemaFilter: ['schema'],
};

const developmentConfig: Config = {
  ...baseConfig,
  driver: 'mysql2',
  dbCredentials: {
    port,
    host,
    user: username,
    password,
    database: name,
  },
};

const testingConfig: Config = {
  ...baseConfig,
  driver: 'mysql2',
  dbCredentials: {
    port,
    host,
    user: username,
    password,
    database: name,
  },
};

const productionConfig: Config = {
  ...baseConfig,
  driver: 'mysql2',
  dbCredentials: {
    uri,
  },
  breakpoints: true,
};

export const getDrizzleConfig = (customEnvironment?: Environment) => {
  const environment = customEnvironment || ENVIRONMENT;

  switch (environment) {
    case 'development':
      return developmentConfig;
    case 'test':
      return testingConfig;
    case 'production':
      return productionConfig;
    default:
      return developmentConfig;
  }
};

// const config: Config =
//   ENVIRONMENT === 'production' ? productionConfig : developmentConfig;
const config: Config = getDrizzleConfig();

export default config;
