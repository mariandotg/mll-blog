import { getDB } from '../../../src/lib/db';

describe('getDB', () => {
  it('should return the same instance in consecutive calls', async () => {
    const instance1 = await getDB();
    const instance2 = await getDB();

    expect(instance1).toBe(instance2);
  });

  it('should return the same instance with a custom environment', async () => {
    const customEnvironment = 'development';
    const instance1 = await getDB(customEnvironment);
    const instance2 = await getDB(customEnvironment);

    expect(instance1).toBe(instance2);
  });
});
