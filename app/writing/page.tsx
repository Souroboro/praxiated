export default function Writing() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 leading-8">
      <h1 className="text-4xl font-semibold tracking-tight font-sans">
        Writing
      </h1>

      <p className="mt-6 text-stone-600">
        Notes on life, truth and making things better and more beautiful.
      </p>

      <div className="mt-12 space-y-8">
        {/* Entry 1 */}
        <article>
          <a
            href="/writing/domestic-logistics-and-strategic-encounters"
            className="group"
          >
            <h2 className="text-xl font-medium tracking-tight group-hover:underline underline-offset-4">
              Domestic Logistics and Strategic Encounters
            </h2>
          </a>

          <p className="mt-2 text-sm text-stone-500">
            May 2026
          </p>

          <p className="mt-3 text-stone-700">
            Five days off, a website finally constructed, pollen-induced retreats,
            Go encounters, and the quiet logistics of domestic life.
          </p>
        </article>

        {/* Future entries go here */}
        {/* 
        <article>
          <a href="/writing/your-next-post" className="group">
            <h2 className="text-xl font-medium tracking-tight group-hover:underline underline-offset-4">
              Title
            </h2>
          </a>
          <p className="mt-2 text-sm text-stone-500">Date</p>
          <p className="mt-3 text-stone-700">
            Short description...
          </p>
        </article>
        */}
      </div>
    </main>
  );
}