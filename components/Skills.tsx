import React, { useState, useEffect } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const skillsData: { category: string; icon: string; skills: string[] }[] = [
  {
    category: 'Languages',
    icon: '⌨',
    skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Go'],
  },
  {
    category: 'Backend Development',
    icon: '⚙',
    skills: ['FastAPI', 'Flask', 'Node.js', 'REST APIs', 'WebSockets'],
  },
  {
    category: 'Frontend',
    icon: '🖥',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    category: 'Databases & Caching',
    icon: '🗄',
    skills: ['PostgreSQL', 'Supabase', 'Redis', 'ChromaDB'],
  },
  {
    category: 'AI & LLM Engineering',
    icon: '⚛',
    skills: ['RAG', 'LangChain', 'LangGraph', 'AI Agents', 'Google Gemini API', 'Vector Databases'],
  },
  {
    category: 'Tools & Platforms',
    icon: '⚒',
    skills: ['Git', 'Docker'],
  }
];



const SkillItem: React.FC<{ skill: string }> = ({ skill }) => (
  <span className="flex items-center gap-1.5 group cursor-default">
    <span className="text-term-green/40 transition-all duration-300 group-hover:text-term-green group-hover:drop-shadow-glow">{'>'}</span>
    <span className="text-term-gray transition-all duration-300 group-hover:text-term-green group-hover:drop-shadow-glow group-hover:-translate-y-0.5 transform inline-block">
      {skill}
    </span>
  </span>
);

const SkillCategory: React.FC<{ data: typeof skillsData[0]; index: number; isVisible: boolean }> = ({ data, index, isVisible }) => (
  <div
    className={`transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
    style={{ transitionDelay: `${index * 120}ms` }}
  >
    <div className="flex items-center gap-3 mb-3 pb-1 border-b border-term-green/20">
      <span className="text-xl">{data.icon}</span>
      <span className="text-term-green font-bold text-lg md:text-xl uppercase tracking-widest drop-shadow-glow">
        {data.category}
      </span>
    </div>
    <div className="flex flex-wrap gap-x-6 gap-y-2 pl-4 text-base md:text-lg">
      {data.skills.map((skill, i) => (
        <SkillItem key={i} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 min-h-[50vh]">
      <div ref={ref} className="max-w-5xl">
        <div className="mb-8">
          <span className="text-term-gray">root@system:</span>
          <span className="text-term-green drop-shadow-glow">~</span>$ ./scan_skills.sh --verbose
        </div>

        <div className="text-term-gray text-lg mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          Scanning installed modules...{' '}
          <span className="text-term-green drop-shadow-glow">[{skillsData.length} categories detected]</span>
        </div>

        <div className="space-y-8">
          {skillsData.map((cat, i) => (
            <SkillCategory key={cat.category} data={cat} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;