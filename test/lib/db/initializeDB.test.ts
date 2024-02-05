import { initializeDB } from '../../../src/lib/db/initializeDB';

describe('initializeDB', () => {
  it('should use "default" mode on test environment', async () => {
    const db = await initializeDB();

    expect(db.config.mode).toBe('default');
  });
});
