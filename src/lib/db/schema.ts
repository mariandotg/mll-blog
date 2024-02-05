import { mysqlTableCreator } from 'drizzle-orm/mysql-core';

const mysqlTable = mysqlTableCreator((name) => `mll_blog_${name}`);
