import { type StatItem } from '@/types';

const stats: StatItem[] = [
  { number: "12+", label: "Created projects" },
  { number: "200+", label: "Projects" },
  { number: "120", label: "Happy Client" },
  { number: "5+", label: "Years" }
];

export function Stats() {
  return (
    <section className="relative mt-12 md:mt-16">
      <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5">
        <div className="mx-auto lg:mx-0 p-5 sm:p-6 py-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg dark:bg-gray-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-6 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1 dark:text-white">
                {stat.number}
              </h2>
              <p className="mt-2 text-heading-3 dark:text-gray-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}