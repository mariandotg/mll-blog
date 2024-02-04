import { getPrefixedEnvVariable } from '../../src/lib/getPrefixedEnvVariable';

describe('getPrefixedEnvVariable', () => {
  it('should return the development environment variable', () => {
    process.env.DEVELOPMENT_MY_VARIABLE = 'development_value';

    const result = getPrefixedEnvVariable('DEVELOPMENT', 'MY_VARIABLE');

    expect(result).toBe('development_value');
  });

  it('should return the testing environment variable', () => {
    process.env.TESTING_MY_VARIABLE = 'testing_value';

    const result = getPrefixedEnvVariable('TESTING', 'MY_VARIABLE');

    expect(result).toBe('testing_value');
  });

  it('should return the production environment variable', () => {
    process.env.PRODUCTION_MY_VARIABLE = 'production_value';

    const result = getPrefixedEnvVariable('PRODUCTION', 'MY_VARIABLE');

    expect(result).toBe('production_value');
  });

  it('should return undefined when environment variable does not exist', () => {
    const result = getPrefixedEnvVariable(
      'UNDEFINED_PREFIX',
      'UNDEFINED_CREDENTIAL'
    );

    expect(result).toBeUndefined();
  });
});
