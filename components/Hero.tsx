import React, { useState, useEffect } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const Hero: React.FC = () => {
  const [ref, isVisible] = useOnScreen<HTMLElement>({ threshold: 0.1 });
  const [linesVisible, setLinesVisible] = useState(0);
  const [titleTyped, setTitleTyped] = useState('');
  const fullTitle = 'VADDE THRISHANK';

  useEffect(() => {
    if (!isVisible) return;
    let i = 0;
    const typer = setInterval(() => {
      if (i < fullTitle.length) {
        setTitleTyped(fullTitle.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typer);
        let row = 0;
        const rowReveal = setInterval(() => {
          setLinesVisible(prev => prev + 1);
          row++;
          if (row >= 8) clearInterval(rowReveal);
        }, 220);
      }
    }, 75);
    return () => clearInterval(typer);
  }, [isVisible]);

  const rows: { label: string; value: React.ReactNode }[] = [
    {
      label: 'MISSION',
      value: 'Building useful technology that solves real-world problems',
    },
    {
      label: 'INTERESTS',
      value: 'Software Engineering · Artificial Intelligence · Product Development',
    },
    {
      label: 'EXPLORING',
      value: 'System Design · Distributed Systems · Modern AI',
    },
    {
      label: 'FOCUS',
      value: 'Scalable Applications · Backend Systems · Developer Tools',
    },
    {
      label: 'STATUS',
      value: (
        <span className="text-[#ff9500] drop-shadow-[0_0_8px_rgba(255,149,0,0.8)] font-bold">
          Open to Software Engineering Opportunities
        </span>
      ),
    },
    {
      label: 'LINKS',
      value: (
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          {[
            { label: 'Resume', href: 'https://drive.google.com/file/d/1BabxbMlOC1eZLNTWK7Pz3O9GNQLk6rk8/view?usp=sharing' },
            { label: 'GitHub', href: 'https://github.com/vaddethrishank' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vaddethrishank/' },
            { label: 'LeetCode', href: 'https://leetcode.com/u/vaddethrishank/' },
          ].map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
              className="hover:text-white transition-colors underline underline-offset-4 hover:drop-shadow-glow">
              {link.label}
            </a>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section ref={ref} id="home" className="pt-10 md:pt-20 min-h-[80vh] flex flex-col justify-center">

      {/* Typewriter title */}
      <div className="mb-4">
        <h1 className="text-5xl md:text-8xl font-bold tracking-[0.15em] text-term-green drop-shadow-glow leading-tight">
          {titleTyped}
          <span className={`ml-1 ${titleTyped.length < fullTitle.length ? 'animate-blink' : 'opacity-0'}`}>█</span>
        </h1>
        <div
          className={`h-[2px] bg-term-green/50 mt-4 transition-all duration-1000 ${isVisible ? 'w-full' : 'w-0'}`}
          style={{ transitionDelay: '1.2s' }}
        />
      </div>

      {/* Tagline — appears first after name */}
      <div
        className={`mb-10 transition-all duration-500 ${linesVisible >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        <p className="text-term-gray/80 text-lg md:text-2xl leading-relaxed">
          Turning ideas into products through software and AI.
        </p>
      </div>

      {/* [OK] rows */}
      <div className="text-lg md:text-2xl font-vt323 space-y-3">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-[100px_1fr] md:grid-cols-[150px_1fr] gap-4 items-start transition-all duration-300 ${
              linesVisible > i + 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <span className="text-term-gray/60 tracking-widest uppercase text-sm md:text-base pt-1 select-none">
              {row.label}
            </span>
            <div className="flex items-start gap-3">
              <span className="text-term-green drop-shadow-glow flex-shrink-0 select-none">[OK]</span>
              <span className="text-term-green leading-snug">{row.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Blinking prompt */}
      <div className={`mt-14 text-xl md:text-2xl text-term-green/60 transition-all duration-500 ${
        linesVisible >= rows.length + 1 ? 'opacity-100' : 'opacity-0'
      }`}>
        <span className="text-term-gray/40 mr-2 select-none">➜</span>
        System ready. Scroll to explore.
        <span className="animate-blink ml-2">█</span>
      </div>
    </section>
  );
};

export default Hero;