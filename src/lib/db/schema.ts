import {
  integer,
  pgTableCreator,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

const pgTable = pgTableCreator((name) => `mll_blog_${name}`);

export const articles = pgTable('articles', {
  id: integer('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  imageUrl: varchar('image_url', { length: 255 }).notNull(),
  description: text('description'),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});
