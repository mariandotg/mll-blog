import { getDB } from '../../../src/lib/db';

describe('getDB', () => {
  it('should get the existing DB instance', async () => {
    // Simula el entorno de producción

    const a = await getDB();
    console.log(a);
    // Verifica que la función drizzle se haya llamado con el modo correcto
    expect(a.config?.mode).toBe('default');
  });
});
