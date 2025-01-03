export function Footer() {
    const footerLinks = {
      company: [
        { text: "About", href: "#" },
        { text: "Blog", href: "#" },
        { text: "Jobs", href: "#" },
        { text: "Partners", href: "#" }
      ],
      solutions: [
        { text: "Marketing", href: "#" },
        { text: "Analytics", href: "#" },
        { text: "Commerce", href: "#" },
        { text: "Insights", href: "#" }
      ],
      support: [
        { text: "Pricing", href: "#" },
        { text: "Documentation", href: "#" },
        { text: "Guides", href: "#" },
        { text: "API Status", href: "#" }
      ]
    };
  
    return (
      <footer className="relative bg-gradient-to-tr from-slate-100 to-zinc-200 dark:from-slate-800 dark:to-zinc-800 pt-28 rounded-t-3xl">
        <span className="w-40 h-40 rounded-full bg-gradient-to-br from-sky-200 dark:from-sky-500 from-0% via-primary dark:via-primary via-80% to-green-400 dark:to-green-600 to-110% absolute left-1/3 bottom-1/3 blur-3xl opacity-30"></span>
    <span className="w-40 h-40 rounded-full bg-gradient-to-br from-yellow-200 dark:from-yellow-400 from-0% via-sky-500 dark:via-sky-700 via-85% to-primary dark:to-primary to-100% absolute right-1/4 bottom-0 blur-3xl opacity-30"></span>
    <span className="w-40 h-40 rounded-full bg-gradient-to-br from-green-300 dark:from-green-500 from-0% via-primary dark:via-primary via-80% to-sky-400 dark:to-sky-600 to-110% absolute right-1/3 top-1/3 blur-3xl opacity-30"></span>
    <span className="w-40 h-40 rounded-full bg-gradient-to-br from-green-300 dark:from-green-500 from-0% via-primary dark:via-primary via-80% to-sky-400 dark:to-sky-600 to-110% absolute right-3/4 top-1/3 blur-3xl opacity-30"></span>
        <div className="container mx-auto px-4 pb-8 z-10">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="col-span-2 lg:col-span-1">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">LIVANO</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Transform your social media presence with our expert strategies and innovative solutions.
                </p>
              </div>
              <div className="flex space-x-4 text-gray-600 dark:text-gray-300">
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                <span className="sr-only">X</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
  
            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white capitalize">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.text}>
                      <a
                        href={link.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300 text-center">
              © {new Date().getFullYear()} LIVANO. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }