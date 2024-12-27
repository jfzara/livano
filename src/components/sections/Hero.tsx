import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative bg-bg py-section min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-hero font-bold text-heading-1 mb-6 dark:text-white">
            Lorem ipsum <span className="text-primary">dolor sit amet</span>
          </h1>
          <p className="text-xl text-heading-2 mb-8 leading-relaxed dark:text-gray-200">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="flex gap-4">
            <Button href="#services">Lorem ipsum</Button>
            <Button variant="outline" href="/contact">Dolor sit amet</Button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-3/4 bg-gradient-to-l from-primary/10 to-transparent -z-10"></div>
    </section>
  );
}