import { BookOpen, Laptop, Trophy, Heart } from 'lucide-react';

interface Resource {
  icon: typeof BookOpen;
  title: string;
  description: string;
  items: string[];
  color: string;
}

const resources: Resource[] = [
  {
    icon: Laptop,
    title: 'Learn to Code',
    description: 'Free platforms to start and sharpen your programming skills.',
    color: 'text-teal-400',
    items: ['freeCodeCamp (web, Python)', 'The Odin Project (full-stack)', 'NeetCode / LeetCode (DSA)', 'YouTube: CS50, Programming with Mosh'],
  },
  {
    icon: BookOpen,
    title: 'Core CS Subjects',
    description: 'Deepen your understanding of fundamentals.',
    color: 'text-sky-400',
    items: ['NPTEL courses (free, certified)', 'GeeksforGeeks (DSA reference)', 'Neso Academy (OS, DBMS, CN)', 'Crash Course Computer Science (YouTube)'],
  },
  {
    icon: Trophy,
    title: 'Career Prep',
    description: 'Get ready for placements, internships, and interviews.',
    color: 'text-indigo-400',
    items: ['StrataScratch (interview Q&A)', 'InterviewBit (placement prep)', 'OverTheWire / picoCTF (security)', 'Pramp (mock interviews)'],
  },
  {
    icon: Heart,
    title: 'Wellbeing',
    description: 'Stay balanced and motivated through the journey.',
    color: 'text-emerald-400',
    items: ['Talk to a senior or mentor regularly', 'Join a college club or community', 'Exercise 3x/week \u2014 even a walk counts', 'Reach out to campus counsellor if stressed'],
  },
];

export default function Resources() {
  return (
    <section id="resources" className="scroll-mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Where to Go Next</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Curated <span className="text-gradient">Resources</span>
        </h2>
        <p className="text-slate-400">
          Hand-picked, mostly free resources to support you across all four years.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {resources.map((r, i) => {
          const Icon = r.icon;
          return (
            <div key={i} className="glass rounded-2xl p-6 animate-float-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex items-center gap-3 mb-3">
                <Icon className={`w-6 h-6 ${r.color}`} />
                <h3 className="font-semibold text-slate-100">{r.title}</h3>
              </div>
              <p className="text-sm text-slate-400 mb-4">{r.description}</p>
              <ul className="space-y-2">
                {r.items.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-slate-300">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-current ${r.color} shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
