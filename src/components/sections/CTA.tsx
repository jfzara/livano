export function CTA() {
  return (
    <section id="cta" className="pb-20">
      <div className="container mx-auto px-4">
        <div className="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-br from-slate-100 to-zinc-200 dark:from-slate-800 dark:to-zinc-800">
          <div className="mx-auto text-center max-w-xl md:max-w-2xl relative">
            <h2 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-bold text-gray-900 dark:text-white">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600">
                Transform
              </span>{" "}
              Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600">
                Social Presence?
              </span>
            </h2>
            <p className="pt-10 font-semibold text-gray-600 dark:text-gray-300">
              Quick Start your Strategic Digital Marketing Campaign Today!
            </p>
            <div className="mx-auto max-w-md sm:max-w-xl pt-10">
              <button className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
