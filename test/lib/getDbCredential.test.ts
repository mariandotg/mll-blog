import { getDbCredential } from '../../src/lib/getDbCredential';

describe('getDbCredential', () => {
  it('should return the credential TESTING_DB_NAME', () => {
    const result = getDbCredential('NAME');
    console.log(result);
    expect(result).toBe('personal_projects');
  });

  it('should return undefined when credential does not exist', () => {
    const result = getDbCredential('UNDEFINED_CREDENTIAL');

    console.log(result);
    expect(result).toBeUndefined();
  });
});
