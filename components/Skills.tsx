import React from 'react';
import useOnScreen from '../hooks/useOnScreen';

const skillsData = {
  'Programming Languages': [
    'C++','JavaScript ', 'SQL', 'HTML', 'CSS'
  ],
  'Full-Stack Web Development': [
    'React.js', 'Tailwind CSS', 'Responsive Design',
    'Node.js', 'Express.js', 'PostgreSQL', 'MySQL',
    'REST APIs', 'WebSockets'
  ],
  'AI & ML': [
    'LangChain', 'LangGraph', 'AI Agents', 'AI Workflows'
  ],
  'Tools & Platforms': [
    'Git', 'VS Code', 'Supabase', 'Chrome DevTools', 'Google Colab'
  ]
};

const SkillCategory: React.FC<{ title: string; skills: string[]; delay: number; isVisible: boolean }> = ({ title, skills, delay, isVisible }) => {
    return (
        <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${delay}ms`}}>
            <h3 className="font-press-start text-lg md:text-xl mb-4 text-pixel-gray-accent dark:text-pixel-red">{title}</h3>
            <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill, index) => (
                    <span 
                        key={index} 
                        className="text-xs md:text-sm font-press-start px-3 py-1.5 border-2 border-pixel-gray-text/50 dark:border-pixel-white/50 
                                   transition-all duration-300 transform hover:-translate-y-1 cursor-default 
                                   hover:bg-pixel-gray-accent hover:text-pixel-black hover:border-pixel-gray-accent
                                   dark:hover:bg-pixel-red dark:hover:text-pixel-black dark:hover:border-pixel-red"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

const Skills: React.FC = () => {
    // FIX: Explicitly set the generic type for useOnScreen to match the div element.
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.2 });
    
    return (
        <section id="skills" className="min-h-screen py-20 flex items-center">
            <div
                ref={ref}
                className="container mx-auto px-4 text-center"
            >
                <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl md:text-4xl font-press-start mb-4">SKILLS.CFG</h2>
                    <div className="w-20 h-1 bg-pixel-gray-accent dark:bg-pixel-red mx-auto mb-12"></div>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                   {Object.entries(skillsData).map(([category, skills], index) => (
                       <SkillCategory key={category} title={category} skills={skills} isVisible={isVisible} delay={200 * (index + 1)} />
                   ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;