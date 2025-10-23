import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import useOnScreen from '../hooks/useOnScreen';

const projects = [
  {
    title: 'Gol-Gol ',
    description: 'Full-stack ride-sharing platform to book/find rides based on similar routes. Features smart route-matching using geolocation and distance heuristics, OTP login, real-time updates via WebSockets, and in-app chat for matched users.',
    imageUrl: '../src/assets/golgol.png',
    liveUrl: 'https://gol-gol-iota.vercel.app/',
    repoUrl: 'https://github.com/vaddethrishank/Gol-Gol.git',
  },
  {
title: 'FormMind – RAG-Powered Form Assistant',
    description: 'Chrome extension that extracts form questions and generates copy-ready answers using RAG with resume data. Integrated Google Gemini 2.0 Flash LLM, ChromaDB, embeddings, and a Flask backend for handling form data and interactive queries.',
    imageUrl: '../src/assets/formmind.png',
    
    repoUrl: 'https://github.com/vaddethrishank/FormMind.git',
  },
  {
    title: 'AI Resume Job Matcher',
    description: 'AI system to parse resumes, search jobs, rank them, and generate personalized cover letters. Uses PyPDFLoader, Tavily API, LangChain, and LangGraph. Deployed on Google Colab integrating parsing, search, and cover letter generation.',
    imageUrl: '../src/assets/jobagent.png',
    repoUrl: 'https://github.com/vaddethrishank/JOB_SEARCH_AGENT.git',
  },
  {
    title: 'Simon Game',
    description: 'Interactive memory-based game inspired by the classic Simon Game. Implements dynamic sequence generation, user input validation with increasing difficulty, and enhanced gameplay with sound effects and animations.',
    imageUrl: '../src/assets/simon.png',
    liveUrl: 'https://vaddethrishank.github.io/Simon-Game/',
    repoUrl: 'https://github.com/vaddethrishank/Simon-Game.git',
  }
];


const LeftArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
);

const RightArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

const Projects: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const totalProjects = projects.length;
    const [ref, isVisible] = useOnScreen<HTMLElement>({ threshold: 0.2 });
    
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };
    
    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStart === 0) return;
        
        const touchEnd = e.changedTouches[0].clientX;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            goToNext();
        } else if (isRightSwipe) {
            goToPrevious();
        }

        setTouchStart(0); // Reset touch start position
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? totalProjects - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === totalProjects - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const getCardStyle = (index: number) => {
        let offset = index - currentIndex;
        if (offset > totalProjects / 2) offset -= totalProjects;
        if (offset < -totalProjects / 2) offset += totalProjects;

        const isCenter = offset === 0;
        const isSide = Math.abs(offset) === 1;

        const transform = `
            rotateY(${offset * -35}deg)
            translateX(${offset * 70}%)
            translateZ(${isCenter ? '0px' : '-200px'})
            scale(${isCenter ? 1 : 0.8})
        `;
        
        let opacity = 0;
        if (isCenter) opacity = 1;
        else if (isSide) opacity = 0.7;

        const zIndex = totalProjects - Math.abs(offset);

        return {
            position: 'absolute',
            width: '100%',
            height: '100%',
            transform,
            opacity,
            zIndex,
            transition: 'transform 0.5s ease, opacity 0.5s ease',
            pointerEvents: isCenter ? 'auto' : 'none',
        } as React.CSSProperties;
    };

    return (
        <section ref={ref} id="projects" className="min-h-screen py-20 flex flex-col justify-center items-center bg-pixel-gray-text/5 dark:bg-black/20 overflow-hidden">
             <div className={`container mx-auto px-4 text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl md:text-4xl font-press-start mb-4">PROJECTS.EXE</h2>
                <div className="w-20 h-1 bg-pixel-gray-accent dark:bg-pixel-red mx-auto"></div>
            </div>
            
            <div className={`relative w-full max-w-5xl flex items-center justify-center h-[30rem] transform transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '200ms' }}>
                <button 
                    onClick={goToPrevious}
                    className="hidden md:block absolute md:-left-16 z-20 p-2 border-2 rounded-none
                               border-pixel-gray-accent text-pixel-gray-accent
                               dark:border-pixel-red dark:text-pixel-red
                               hover:bg-pixel-gray-accent dark:hover:bg-pixel-red
                               hover:text-pixel-black dark:hover:text-black
                               transition-all duration-300 transform hover:-translate-y-1"
                    aria-label="Previous project"
                >
                    <LeftArrow />
                </button>

                <div 
                  className="relative w-80 md:w-96 h-full [perspective:1200px]"
                  onTouchStart={onTouchStart}
                  onTouchEnd={onTouchEnd}
                >
                    <div className="relative w-full h-full [transform-style:preserve-3d]">
                        {projects.map((project, index) => (
                            <div key={index} style={getCardStyle(index)}>
                                <ProjectCard {...project} />
                            </div>
                        ))}
                    </div>
                </div>

                <button 
                    onClick={goToNext}
                    className="hidden md:block absolute md:-right-16 z-20 p-2 border-2 rounded-none
                               border-pixel-gray-accent text-pixel-gray-accent
                               dark:border-pixel-red dark:text-pixel-red
                               hover:bg-pixel-gray-accent dark:hover:bg-pixel-red
                               hover:text-pixel-black dark:hover:text-black
                               transition-all duration-300 transform hover:-translate-y-1"
                    aria-label="Next project"
                >
                    <RightArrow />
                </button>
            </div>
        </section>
    );
};

export default Projects;