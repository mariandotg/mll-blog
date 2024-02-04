const { NODE_ENV } = process.env;
export const ENVIRONMENT = NODE_ENV || 'development';

/**
 * Gets the environment variable associated with the key passed on the method based on the running environment.
 *
 * It returns "string | undefined", so you need to validate the output. */
export const getEnvVariable = (key: string) => {
  let prefix;

  switch (ENVIRONMENT) {
    case 'development':
      prefix = 'DB';
      break;
    case 'test':
      prefix = 'TESTING_DB';
      break;
    case 'production':
      prefix = 'PRODUCTION_DB';
      break;
    default:
      prefix = 'DB';
  }

  const prefixedKey = `${prefix}_${key}`.toUpperCase();
  return process.env[prefixedKey];
};
