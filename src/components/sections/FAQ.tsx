import React from 'react';
import { faqs } from '../../data/faqs';

export function FAQ() {
  return (
    <section id="faq" className="py-10 md:py-16">
      <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600">Questions</span>
          </h1>
        </div>
        <div className="grid border rounded-3xl border-box-border border-box-bg bg-box-bg shadow-lg divide-y divide-slate-200 dark:divide-slate-800 max-w-3xl mx-auto mt-8 overflow-hidden">
          {faqs.map((faq, index) => (
            <details key={index} className="group py-5 px-5 hover:bg-slate-200 dark:hover:bg-slate-800">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-heading-1 dark:text-white">
                <span>{faq.question}</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="md:text-lg text-heading-3 dark:text-white mt-3 group-open:animate-fadeIn">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}