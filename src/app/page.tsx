import { getDB } from '@/lib/db';
import { articles } from '@/lib/db/schema';

export default async function Home() {
  const db = await getDB();
  const a = await db.drizzle.select().from(articles);
  console.log(a);
  return (
    <main className='flex flex-col items-center justify-between min-h-screen p-24'>
      <div className='z-10 items-center justify-between w-full max-w-5xl p-4 text-sm bg-red-500 lg:flex'>
        articles
      </div>
    </main>
  );
}
