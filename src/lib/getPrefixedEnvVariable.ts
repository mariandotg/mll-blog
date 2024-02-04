/**
 * Gets the value of an environment variable by combining a provided prefix and key.
 *
 * It returns "string | undefined", so you need to validate the output. */
export const getPrefixedEnvVariable = (prefix: string, key: string) => {
  const prefixedKey = `${prefix}_${key}`.toUpperCase();
  return process.env[prefixedKey];
};
