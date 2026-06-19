import React from 'react';
import useOnScreen from '../hooks/useOnScreen';

const projects = [
  {
    title: 'Kiwin',
    description: 'Full-stack AI platform that empowers users to create and deploy custom AI assistants with no coding required. Built using Next.js, FastAPI, Supabase, pgvector, and Google Gemini.',
    imageUrl: '/kiwin.png',
    liveUrl: 'https://kiwin-v2.vercel.app/',
    repoUrl: 'https://github.com/vaddethrishank/Kiwin',
  },
  {
    title: 'Gol-Gol',
    description: 'Full-stack ride-sharing platform to book/find rides based on similar routes. Features smart route-matching using geolocation and distance heuristics.',
    imageUrl: '/golgol.png',
    liveUrl: 'https://gol-gol-iota.vercel.app/',
    repoUrl: 'https://github.com/vaddethrishank/Gol-Gol.git',
  },
  {
    title: 'FormMind – RAG-Powered Form Assistant',
    description: 'Chrome extension that extracts form questions and generates copy-ready answers using RAG with resume data.',
    imageUrl: '/formmind.png',
    repoUrl: 'https://github.com/vaddethrishank/FormMind.git',
  },
  {
    title: 'AI Resume Job Matcher',
    description: 'AI system to parse resumes, search jobs, rank them, and generate personalized cover letters using PyPDFLoader, Tavily API, LangChain.',
    imageUrl: '/jobagent.png',
    repoUrl: 'https://github.com/vaddethrishank/JOB_SEARCH_AGENT.git',
  },
  {
    title: 'Simon Game',
    description: 'Interactive memory-based game inspired by the classic Simon Game. Implements dynamic sequence generation and user input validation.',
    imageUrl: '/simon.png',
    liveUrl: 'https://vaddethrishank.github.io/Simon-Game/',
    repoUrl: 'https://github.com/vaddethrishank/Simon-Game.git',
  }
];

const ProjectItem: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`mb-16 transform transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
    >
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-1/2 group relative border border-term-green/30 p-1 bg-black shadow-glow-sm hover:shadow-glow transition-all duration-300">
            {/* Terminal scanline overlay on image */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none z-10 opacity-30 group-hover:opacity-10 transition-opacity"></div>
            
            <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-auto object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 will-change-transform"
            />
            <div className="absolute top-2 left-2 bg-black text-term-green text-xs font-mono px-2 py-1 z-20 border border-term-green/50">
               [RENDER_IMG: OK]
            </div>
        </div>

        <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-2xl md:text-3xl text-term-green drop-shadow-glow uppercase tracking-widest">{project.title}</h3>
            
            <div className="text-term-gray text-lg leading-relaxed border-l-2 border-term-green/30 pl-4 py-1">
                {project.description}
            </div>

            <div className="flex gap-4 pt-4">
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                        <span className="text-term-green">➜</span> [LIVE DEMO]
                    </a>
                )}
                {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                        <span className="text-term-green">➜</span> [SOURCE CODE]
                    </a>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20">
            <div className="mb-12">
                <span className="text-term-gray">root@system:</span><span className="text-term-green drop-shadow-glow">~/projects</span>$ ./list_all.sh
            </div>
            
            <div className="flex flex-col gap-8">
                {projects.map((project, index) => (
                    <ProjectItem key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;