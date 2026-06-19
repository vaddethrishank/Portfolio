import React from 'react';
import useOnScreen from '../hooks/useOnScreen';


const Section: React.FC<{ cmd: string; children: React.ReactNode }> = ({ cmd, children }) => {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <div className="mb-5 text-base md:text-xl select-none">
        <span className="text-term-gray/50">root@system:</span>
        <span className="text-term-green drop-shadow-glow">~</span>
        <span className="text-term-gray/50">$ </span>
        <span className="text-term-gray/80">{cmd}</span>
      </div>
      <div className="pl-4 border-l border-term-green/20 space-y-4">{children}</div>
    </div>
  );
};

const StatBox: React.FC<{ label: string; value: string; sub?: string }> = ({ label, value, sub }) => (
  <div className="border border-term-green/30 bg-term-green/5 hover:bg-term-green/10 hover:border-term-green hover:shadow-glow transition-all duration-300 p-4 cursor-default group">
    <div className="text-term-gray/60 text-sm font-mono uppercase tracking-widest mb-1 select-none">{label}</div>
    <div className="text-term-green text-3xl md:text-4xl font-bold drop-shadow-glow group-hover:text-white transition-colors">{value}</div>
    {sub && <div className="text-term-gray/60 text-xs font-mono mt-1">{sub}</div>}
  </div>
);

const About: React.FC = () => {
  const [gridRef, gridVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });
  const [statsRef, statsVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });

  // LeetCode stats — hardcoded (all third-party APIs have CORS/rate-limit issues)
  const lc = { solvedProblem: 500, easySolved: 230, mediumSolved: 220, hardSolved: 50 };

  const focusAreas = [
    {
      label: 'AI Integration',
      desc: "Building real products that use LLMs — RAG pipelines, semantic search, embeddings, and tool-augmented agents. I care about making AI a reliable production component, not just a demo.",
    },
    {
      label: 'Scalable Backends',
      desc: 'Designing API-first services with FastAPI and Node.js — proper schema design, clean REST contracts, WebSocket services for real-time features, and thinking about performance from day one.',
    },
    {
      label: 'Agentic Workflows',
      desc: 'Exploring how autonomous agents can plan and execute multi-step tasks using LangGraph and LangChain. Actively building in this space — it is where I am putting most of my energy right now.',
    },
    {
      label: 'Fullstack Development',
      desc: 'Comfortable end-to-end — React frontends, backend APIs, database design, auth, and deployment. I ship complete features, not just individual layers.',
    },
  ];

  return (
    <section id="about" className="py-20 space-y-20">

      {/* Bio */}
      <Section cmd="cat about.txt">
        <div className="text-lg md:text-xl text-term-gray leading-relaxed space-y-4 max-w-3xl">
          <p>
            I am a <span className="text-term-green font-bold drop-shadow-glow">developer who genuinely enjoys the craft</span> — from
            a clean API contract to a working AI pipeline. I started with competitive programming which gave me a strong
            algorithmic foundation. Now I channel that into building{' '}
            <span className="text-white">real, deployed products</span> that solve actual problems.
          </p>
          <p>
            My current obsession is the intersection of{' '}
            <span className="text-term-green">AI and backend engineering</span> — designing systems where language models
            are a dependable component, not a prototype feature bolted on at the end.
          </p>
        </div>
      </Section>

      {/* Focus Areas */}
      <Section cmd="./scan_focus_areas.sh">
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {focusAreas.map((area, i) => (
            <div
              key={i}
              className={`border border-term-green/25 p-5 hover:border-term-green/60 hover:bg-term-green/5 transition-all duration-300 group cursor-default ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 120}ms`, transitionProperty: 'opacity, transform, background, border' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-term-green/50 select-none">{'>'}</span>
                <span className="text-term-green font-bold text-lg md:text-xl group-hover:drop-shadow-glow transition-all">
                  {area.label}
                </span>
              </div>
              <p className="text-term-gray/80 text-base leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Profile Cards — Live Data */}
      <Section cmd="./fetch_profiles.sh --live">
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* LeetCode Card — using leetcard.jacoblin.cool image (no CORS) */}
          <a
            href="https://leetcode.com/u/vaddethrishank/"
            target="_blank"
            rel="noreferrer"
            className={`border border-term-green/30 bg-term-green/5 hover:border-term-green hover:shadow-glow transition-all duration-300 p-4 group cursor-pointer block ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="flex items-center gap-2 mb-3 border-b border-term-green/20 pb-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-term-green group-hover:drop-shadow-glow transition-all">
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.112-.661 1.824-.661s1.357.194 1.823.661l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.038-1.902l-2.609-2.519c-.875-.874-2.007-1.414-3.148-1.414s-2.273.54-3.148 1.414L4.049 9.617c-.874.874-1.337 2.084-1.337 3.293s.463 2.42 1.337 3.293l4.332 4.363c.875.874 2.007 1.33 3.148 1.33s2.273-.456 3.148-1.33l2.697-2.607c.514-.515.496-1.366-.039-1.9-.535-.535-1.386-.553-1.9-.038z" fill="#39ff14"/>
              </svg>
              <span className="text-term-green font-bold font-mono tracking-widest text-sm uppercase group-hover:drop-shadow-glow transition-all">LeetCode</span>
              <span className="ml-auto text-term-green/30 text-xs">↗</span>
            </div>
            <img
              src="https://leetcard.jacoblin.cool/vaddethrishank?theme=dark&font=JetBrains%20Mono"
              alt="LeetCode Stats"
              className="w-full opacity-90 group-hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </a>

          {/* GitHub Card */}
          <a href="https://github.com/vaddethrishank" target="_blank" rel="noreferrer"
            className={`border border-term-green/30 bg-term-green/5 hover:bg-term-green/10 hover:border-term-green hover:shadow-glow transition-all duration-300 p-5 group cursor-pointer block ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="flex items-center gap-2 mb-3 border-b border-term-green/20 pb-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-term-green group-hover:drop-shadow-glow transition-all" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
              <span className="text-term-green font-bold font-mono tracking-widest text-sm uppercase group-hover:drop-shadow-glow transition-all">GitHub</span>
              <span className="ml-auto text-term-green/30 text-xs">↗</span>
            </div>
            <img
              src="https://github-readme-stats.vercel.app/api?username=vaddethrishank&show_icons=true&hide_border=true&bg_color=050505&title_color=39ff14&icon_color=39ff14&text_color=a3a3a3&hide=contribs"
              alt="GitHub Stats"
              className="w-full opacity-90 group-hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </a>

          {/* Academic Card */}
          <div
            className={`border border-term-green/30 bg-term-green/5 hover:bg-term-green/10 hover:border-term-green hover:shadow-glow transition-all duration-300 p-5 group cursor-default ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex items-center gap-2 mb-4 border-b border-term-green/20 pb-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-term-green" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              <span className="text-term-green font-bold font-mono tracking-widest text-sm uppercase group-hover:drop-shadow-glow transition-all">Academic</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <span className="text-term-gray/60 font-mono text-xs uppercase tracking-widest">Institution</span>
                <span className="text-term-green font-sans text-sm font-bold group-hover:text-white transition-colors">NIT Silchar</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-term-gray/60 font-mono text-xs uppercase tracking-widest">Branch</span>
                <span className="text-term-green font-sans text-sm font-bold group-hover:text-white transition-colors">CSE</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-term-gray/60 font-mono text-xs uppercase tracking-widest">CGPA</span>
                <span className="text-term-green text-2xl font-bold drop-shadow-glow group-hover:text-white transition-colors">8.96</span>
              </div>
            </div>
          </div>

        </div>
      </Section>

      {/* Education */}
      <Section cmd="cat education.log">
        <div className="space-y-5">
          {[
            {
              institution: 'National Institute of Technology, Silchar',
              degree: 'B.Tech — Computer Science & Engineering',
              period: 'Jul 2023 — Present · Assam, India',
              score: 'CGPA: 8.96',
            },
            {
              institution: 'Bhashyam Junior College, Guntur',
              degree: 'HSC — Science Stream',
              period: 'Jul 2021 — Jun 2023 · Andhra Pradesh, India',
              score: 'Percentage: 95.4%',
            },
          ].map((edu, i) => (
            <div key={i} className="border border-term-green/25 p-4 hover:border-term-green/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-2">
                <span className="text-term-green font-bold text-lg drop-shadow-glow">{edu.institution}</span>
                <span className="text-term-gray/60 font-mono text-sm">{edu.period}</span>
              </div>
              <div className="text-term-gray/80">{edu.degree}</div>
              <div className="text-term-green/70 font-mono mt-1 text-sm">
                {edu.score.split(':')[0]}:{' '}
                <span className="font-bold text-term-green drop-shadow-glow">{edu.score.split(':')[1]}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Achievements */}

    </section>
  );
};

export default About;