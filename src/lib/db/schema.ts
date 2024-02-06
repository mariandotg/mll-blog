import {
  varchar,
  text,
  timestamp,
  mysqlTableCreator,
  serial,
} from 'drizzle-orm/mysql-core';

const mysqlTable = mysqlTableCreator((name) => `mll_blog_${name}`);

export const articles = mysqlTable('articles', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  imageUrl: varchar('image_url', { length: 255 }).notNull(),
  description: text('description'),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow().onUpdateNow(),
});
