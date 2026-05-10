import { posts } from "./posts";

export default function Life() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="mx-auto max-w-2xl px-6 py-20 leading-8">
      <h1 className="text-4xl font-semibold tracking-tight font-sans">
        Life
      </h1>

      <p className="mt-6 text-stone-600">
        Recent events, thoughts, and observations.
      </p>

      <div className="mt-12 space-y-10">
        {sortedPosts.map((post) => (
          <article key={post.slug}>
            <a href={`/life/${post.slug}`} className="group">
              <h2 className="text-xl font-medium tracking-tight group-hover:underline underline-offset-4">
                {post.title}
              </h2>
            </a>

            <p className="mt-2 text-sm text-stone-500">
              {post.displayDate}
            </p>

            <p className="mt-3 text-stone-700">
              {post.summary}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}