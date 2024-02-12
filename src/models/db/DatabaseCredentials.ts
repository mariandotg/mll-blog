import z from 'zod';

export interface DatabaseCredentials {
  host: string;
  name: string;
  username: string;
  password: string;
  port: number;
  uri: string;
}

export const dbCredentialsSchema = z.object({
  host: z.string().min(1),
  name: z.string().min(1),
  username: z.string().min(1),
  password: z.string().min(1),
  port: z.number().nonnegative(),
  uri: z.string().min(1),
  url: z.string().min(1),
  authToken: z.string().min(1).optional(),
});

export interface SQliteDatabaseCredentials {
  url: string;
  authToken: string;
}

export const SQLiteDatabaseCredentialsSchema = z.object({
  url: z.string().min(1),
  authToken: z.string().min(1),
});
