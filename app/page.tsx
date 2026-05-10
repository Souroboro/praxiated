import { posts } from "./life/posts";

export default function Home() {
  const recentPosts = posts.slice(0, 3);

  return (
    <main className="mx-auto max-w-2xl px-6 py-20 leading-8">
      <h1 className="text-4xl font-semibold tracking-tight font-sans">
        Praxiated
      </h1>

      <p className="mt-6 text-stone-600">
        Thoughts — of varying coherency and structure.
      </p>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Recent updates
        </h2>

        <div className="mt-8 space-y-8">
          {recentPosts.map((post) => (
            <article key={post.slug}>
              <a href={`/life/${post.slug}`} className="group">
                <h3 className="text-lg font-medium tracking-tight group-hover:underline underline-offset-4">
                  {post.title}
                </h3>
              </a>

              <p className="mt-1 text-sm text-stone-500">
                {post.displayDate}
              </p>

              <p className="mt-2 text-stone-700">
                {post.summary}
              </p>
            </article>
          ))}
        </div>

        <a
          href="/life"
          className="mt-8 inline-block text-sm underline underline-offset-4"
        >
          View all entries
        </a>
      </section>
    </main>
  );
}