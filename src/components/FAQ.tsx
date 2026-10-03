import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs, categories } from '@/data/faqs';

export default function FAQ() {
  const [activeCat, setActiveCat] = useState<string>('All');
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = activeCat === 'All' ? faqs : faqs.filter((f) => f.category === activeCat);
  const tabs = ['All', ...categories];

  return (
    <section id="questions" className="scroll-mt-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-10">
        <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">Common Questions</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Answers to Questions <span className="text-gradient">Students Actually Ask</span>
        </h2>
        <p className="text-slate-400">
          Real, practical guidance on academics, career, skills, and college life.
        </p>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveCat(tab);
              setOpenId(null);
            }}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeCat === tab
                ? 'bg-gradient-to-r from-teal-500 to-sky-500 text-white'
                : 'glass text-slate-300 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="space-y-3">
        {filtered.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`glass rounded-xl overflow-hidden transition-all ${isOpen ? 'border-teal-500/30' : ''}`}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full flex items-start gap-3 p-4 text-left"
              >
                <HelpCircle className={`w-5 h-5 mt-0.5 shrink-0 ${isOpen ? 'text-teal-400' : 'text-slate-500'}`} />
                <div className="flex-1">
                  <span className={`text-sm font-medium ${isOpen ? 'text-white' : 'text-slate-200'}`}>
                    {faq.question}
                  </span>
                  <span className="block text-xs text-teal-400/70 mt-0.5">{faq.category}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-teal-400' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-4 pl-12 text-sm text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
