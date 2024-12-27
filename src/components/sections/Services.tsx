interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Lorem Ipsum",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    icon: "🌐"
  },
  {
    title: "Dolor Sit",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit",
    icon: "📱"
  },
  {
    title: "Consectetur",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
    icon: "🎨"
  }
];

export function Services() {
  return (
    <section className="py-20 bg-box dark:bg-gray-800" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12 dark:text-white">Lorem Ipsum</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded-lg bg-bg hover:shadow-lg transition-shadow dark:bg-gray-700">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-heading-1 dark:text-white">{service.title}</h3>
              <p className="text-heading-2 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}