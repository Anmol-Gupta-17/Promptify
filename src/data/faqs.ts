export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const categories = ['Academics', 'Career', 'Skills', 'Lifestyle'] as const;

export const faqs: FAQItem[] = [
  {
    id: 'q1',
    category: 'Academics',
    question: 'How do I manage my time between assignments, labs, and exams?',
    answer:
      'Use a weekly time-block system: dedicate fixed slots for lectures, 2-hour focused study blocks, and one buffer slot each day for overflow. Prioritize by deadline and weight\u2014spend the most effort on high-credit courses near exams. Review your plan every Sunday night and adjust.',
  },
  {
    id: 'q2',
    category: 'Academics',
    question: 'Which programming language should I learn first?',
    answer:
      'Start with C or Python. C teaches you memory and how computers actually work; Python lets you build things quickly and is great for AI/data electives later. Most Indian CSE programs teach C in semester 1, so follow your curriculum and pick up Python alongside it for projects.',
  },
  {
    id: 'q3',
    category: 'Academics',
    question: 'How important are CGPA and marks really?',
    answer:
      'CGPA matters for campus placements shortlisting (most companies set a 6.5\u20137.5 cutoff) and for higher studies applications. Beyond the cutoff, skills and projects matter more. Aim for a steady 7.5+ so CGPA never blocks a door, then invest the rest of your energy in building real projects.',
  },
  {
    id: 'q4',
    category: 'Academics',
    question: 'I failed or got a backlog in a subject. What do I do?',
    answer:
      'Don\u2019t panic\u2014backlogs are common. Identify why: was it conceptual, attendance, or exam strategy? Meet the professor, get the previous year papers, and study with a peer who passed. Clear it in the supplementary exam. One backlog doesn\u2019t ruin your career; a pattern of ignoring them does.',
  },
  {
    id: 'q5',
    category: 'Career',
    question: 'Should I focus on placements or higher studies (GATE/GRE)?',
    answer:
      'Decide by the end of Year 5 semester. If you enjoy core CS subjects and want specialization (AI, cybersecurity, research), prepare for GATE/GRE. If you want to start earning and learn on the job, target placements. You can always work for 2 years then study\u2014it\u2019s not either-or forever.',
  },
  {
    id: 'q6',
    category: 'Career',
    question: 'How do I get an internship in my second or third year?',
    answer:
      'Build 2-3 small projects on GitHub, create a clean LinkedIn profile, and apply to startups (they hire early). Use platforms like Internshala, Wellfound, and your college\u2019s internship cell. Cold-email founders of small companies\u2014they respond. Start applying in August for summer internships.',
  },
  {
    id: 'q7',
    category: 'Career',
    question: 'Which career path should I pick: developer, data, or cybersecurity?',
    answer:
      'Try all three in Year 2: build a web app, do a small data analysis project, and complete a basic CTF. By Year 3, pick the one you enjoyed most and go deep. There\u2019s no wrong choice\u2014all pay well. Pick what keeps you curious, not what sounds trendy.',
  },
  {
    id: 'q8',
    category: 'Skills',
    question: 'Do I need to do competitive programming for placements?',
    answer:
      'For product companies (Amazon, Google, Microsoft), yes\u2014they test DSA heavily. For service-based companies (TCS, Infosys, Wipro), basic aptitude and simple coding suffice. Start LeetCode in Year 2 with easy problems, ramp to medium by Year 3. 150-200 solved problems is a solid target.',
  },
  {
    id: 'q9',
    category: 'Skills',
    question: 'How do I build projects if I don\u2019t know where to start?',
    answer:
      'Start tiny: a to-do app, a weather app using a free API, a personal portfolio site. Don\u2019t follow tutorials blindly\u2014after building, change one feature on your own. Each project teaches you debugging, which is the real skill. Put everything on GitHub, even the ugly ones.',
  },
  {
    id: 'q10',
    category: 'Skills',
    question: 'Are certifications (AWS, Coursera, NPTEL) worth it?',
    answer:
      'Certifications help when they match your target role\u2014AWS for cloud/DevOps, NPTEL for core CS depth, Coursera for structured ML. They\u2019re conversation starters, not job guarantees. A project that uses the certified skill beats the certificate itself. Don\u2019t collect them; apply them.',
  },
  {
    id: 'q11',
    category: 'Lifestyle',
    question: 'I feel lost and compare myself to classmates. Is that normal?',
    answer:
      'Completely normal. Everyone\u2019s timeline is different\u2014someone coding since 10th grade will look ahead of you in Year 1, but the gap closes by Year 3 if you stay consistent. Compete with last week\u2019s you, not your neighbour. Talk to a senior or mentor; isolation makes it worse.',
  },
  {
    id: 'q12',
    category: 'Lifestyle',
    question: 'How do I balance college with gaming, social life, and sleep?',
    answer:
      'You don\u2019t need to quit fun\u2014you need boundaries. Treat college like a 9-to-5: lectures and study during the day, evenings are yours. Protect 6-7 hours of sleep\u2014it\u2019s the single biggest factor in focus and memory. All-nighters before exams hurt more than they help.',
  },
];
