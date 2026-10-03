import { Code2, Database, Brain, Cloud, ArrowDown } from 'lucide-react';

interface YearCard {
  year: string;
  label: string;
  icon: typeof Code2;
  color: string;
  topics: string[];
  tip: string;
  current?: boolean;
}

const years: YearCard[] = [
  {
    year: 'Year 1',
    label: 'Foundations',
    icon: Code2,
    color: 'from-teal-500 to-teal-400',
    current: true,
    topics: [
      'Programming in C / C++ \u2014 loops, functions, pointers, arrays',
      'Mathematics \u2014 Calculus, Linear Algebra, Discrete Structures',
      'Basic Data Structures \u2014 arrays, linked lists, stacks, queues',
      'Communication skills & technical writing',
    ],
    tip: 'Focus on getting comfortable with code. Build small things: a calculator, a number guessing game, simple file I/O. Don\u2019t worry about being "behind" \u2014 everyone starts here.',
  },
  {
    year: 'Year 2',
    label: 'Core CS',
    icon: Database,
    color: 'from-sky-500 to-sky-400',
    topics: [
      'Object-Oriented Programming (Java / C++)',
      'DBMS \u2014 SQL, normalization, ER diagrams',
      'Operating Systems \u2014 processes, threads, memory',
      'Algorithms \u2014 sorting, searching, recursion, complexity',
      'Computer Organization & Architecture',
    ],
    tip: 'Start LeetCode (easy problems) and build your first real project\u2014a CRUD web app or a database-backed tool. Apply for summer internships at startups.',
  },
  {
    year: 'Year 3',
    label: 'Specialization',
    icon: Brain,
    color: 'from-indigo-500 to-indigo-400',
    topics: [
      'Computer Networks & Protocols',
      'Software Engineering \u2014 SDLC, testing, git workflows',
      'Electives: Machine Learning / Web Dev / Cybersecurity / Cloud',
      'DAA \u2014 Dynamic Programming, Graphs, Greedy',
      'Mini-project or industry internship',
    ],
    tip: 'Pick one track and go deep. This is the year your resume takes shape\u2014aim for 2 solid projects and 1 internship. Start placement/GATE prep by semester 5.',
  },
  {
    year: 'Year 4',
    label: 'Launch',
    icon: Cloud,
    color: 'from-emerald-500 to-emerald-400',
    topics: [
      'Major Project / Capstone',
      'Cloud & DevOps \u2014 Docker, CI/CD, deployment',
      'Distributed Systems & Electives',
      'Placement season / GATE / GRE / Higher studies applications',
    ],
    tip: 'Polish your resume, practice mock interviews, and keep your projects live online. For higher studies, finalize applications by November. Don\u2019t coast\u2014finish strong.',
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-14">
        <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">The Roadmap</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Your 4-Year <span className="text-gradient">B.Tech Journey</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A clear, year-by-year path through Computer Science \u2014 what to study, what to build, and what to focus on each step of the way.
        </p>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/40 via-indigo-500/40 to-emerald-500/40 -translate-x-1/2" />

        <div className="space-y-8 lg:space-y-0">
          {years.map((y, i) => {
            const Icon = y.icon;
            const isLeft = i % 2 === 0;
            return (
              <div key={y.year} className={`lg:flex lg:items-center lg:gap-8 ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
                <div className="lg:w-1/2 lg:py-8">
                  <div className="glass rounded-2xl p-6 hover:scale-[1.015] transition-transform animate-float-up" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${y.color} flex items-center justify-center shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-lg text-slate-100">{y.year}</h3>
                          {y.current && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 font-medium border border-teal-500/30">
                              Start here
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 uppercase tracking-wide">{y.label}</p>
                      </div>
                    </div>
                    <ul className="space-y-2.5 mb-4">
                      {y.topics.map((t, idx) => (
                        <li key={idx} className="flex gap-2.5 text-sm text-slate-300">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${y.color} shrink-0`} />
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-slate-700/40 pt-3">
                      <p className="text-sm text-slate-400 italic">{y.tip}</p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex w-0 relative">
                  <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${y.color} ring-4 ring-slate-950`} />
                </div>

                <div className="hidden lg:block lg:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
          <ArrowDown className="w-4 h-4" />
          The roadmap is a guide, not a race. Move at your pace.
        </p>
      </div>
    </section>
  );
}
