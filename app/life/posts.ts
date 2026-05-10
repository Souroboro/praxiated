export type Post = {
  title: string;
  slug: string;
  date: string;        // ISO format for sorting
  displayDate: string; // what you show on the site
  summary: string;
};

export const posts: Post[] = [
  {
    title: "Domestic Logistics and Strategic Encounters",
    slug: "domestic-logistics-and-strategic-encounters",
    date: "2026-05-05",
    displayDate: "5 May 2026",
    summary:
      "Five days off, a website built, pollen defeated by retreat, and three ZB Cup matches completed.",
  },
];