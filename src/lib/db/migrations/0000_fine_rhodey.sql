CREATE TABLE IF NOT EXISTS "mll_blog_articles" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"image_url" varchar(255) NOT NULL,
	"description" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
