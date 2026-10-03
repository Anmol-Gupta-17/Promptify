import { GraduationCap, Compass, BookOpen, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FAQ from '@/components/FAQ';
import Roadmap from '@/components/Roadmap';
import Resources from '@/components/Resources';

function App() {
  return (
    <div id="top" className="min-h-screen bg-slate-950 text-slate-100 relative overflow-x-hidden">
      {/* ambient background glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-teal-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[-10%] w-[35rem] h-[35rem] bg-sky-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[30rem] h-[30rem] bg-indigo-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto animate-float-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-teal-300 mb-6">
              <Compass className="w-4 h-4" />
              Clear guidance for engineering students
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Find Your Way Through
              <br />
              <span className="text-gradient">Four Years of Engineering</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Straightforward answers to the questions every CS student has \u2014 plus a year-by-year roadmap and curated resources to keep you on track.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#questions"
                className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-sky-500 hover:from-teal-400 hover:to-sky-400 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:scale-105"
              >
                <BookOpen className="w-5 h-5" />
                Browse Questions
              </a>
              <a
                href="#roadmap"
                className="flex items-center gap-2 glass px-6 py-3 rounded-xl text-slate-200 hover:bg-slate-800/60 transition-colors font-medium"
              >
                <GraduationCap className="w-5 h-5" />
                See the Roadmap
              </a>
            </div>
          </div>

          {/* quick stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            {[
              { icon: BookOpen, label: 'Common Questions', value: '12+' },
              { icon: GraduationCap, label: 'Roadmap Years', value: '4' },
              { icon: Compass, label: 'Career Paths', value: '3' },
              { icon: Heart, label: 'Wellbeing Tips', value: 'Yes' },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="glass rounded-2xl p-5 text-center animate-float-up" style={{ animationDelay: `${i * 80}ms` }}>
                  <Icon className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gradient">{s.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ */}
        <FAQ />

        {/* Roadmap */}
        <Roadmap />

        {/* Resources */}
        <Resources />

        {/* Footer */}
        <footer className="border-t border-slate-800/60 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-teal-500 to-sky-500 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold">Student<span className="text-gradient">Path</span></span>
            </div>
            <p className="text-sm text-slate-500">
              Minimal, honest guidance for engineering students. Built to help, not to overwhelm.
            </p>
            <p className="text-xs text-slate-600 mt-2">
              You\u2019re not behind. You\u2019re just getting started.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
