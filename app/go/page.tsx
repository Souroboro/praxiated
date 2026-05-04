export default function Go() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 leading-8">
      <h1 className="text-4xl font-semibold tracking-tight font-sans">Go</h1>

      <p className="mt-6">
        I began playing Go just before the summer of my second year of university
        in 2008. My college son, John Richardson, had been playing for a few
        months, and I made a promise to beat him after the summer holidays. We
        now both have our own narratives of how events played out.
      </p>

      <p className="mt-8">
        I&apos;ve lived in China for 16+ years and play regularly in Beijing and
        Changsha. I was awarded 5 dan in 2018 after finishing 4th in the Dalian
        Sophora Festival Invitational.
      </p>

      <p className="mt-8 mb-16">
        In 2024 I represented Ireland at the WAGC in Shenzhen. I have played
        board 1 for Ireland in the Pandanet European Team Championship for the
        last several years. This normally involves waking up at 03:00 or 04:00
        in the morning. This isn&apos;t as bad as it sounds, as I normally wake
        up at 04:45 anyway.
      </p>

      <div className="mt-24 space-y-12">
        <figure>
          <img
            src="/images/WAGC.jpg"
            alt="Shenzhen WAGC 2024"
            className="w-full border border-stone-300"
          />
          <figcaption className="mt-3 text-sm text-stone-600">
            Shenzhen WAGC 2024.
          </figcaption>
        </figure>

        <figure>
          <img
            src="/images/GUZIHAODALIAN.jpg"
            alt="Exhibition match against Gu Zihao 9 dan"
            className="w-full border border-stone-300"
          />
          <figcaption className="mt-3 text-sm text-stone-600">
            Exhibition match against world champion Gu Zihao 辜梓豪 9 dan.
          </figcaption>
        </figure>
      </div>

      <section className="mt-24 border-t border-stone-300 pt-10">
        <p className="text-sm uppercase tracking-wide text-stone-500 font-sans">
          Game Analysis
        </p>

        <h2 className="mt-3 text-2xl font-semibold font-sans">Go Reviews</h2>

        <p className="mt-4 max-w-xl text-stone-600">
          Some of my attempts at playing Go, with comments.
        </p>

        <div className="mt-6">
          <a
            href="/go/reviews"
            className="inline-block rounded-md border border-stone-300 px-4 py-2 text-sm font-sans hover:bg-stone-100"
          >
            View all reviews →
          </a>
        </div>
      </section>
    </main>
  );
}