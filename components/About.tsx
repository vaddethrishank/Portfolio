import React from 'react';
import useOnScreen from '../hooks/useOnScreen';

const PixelAvatar: React.FC = () => (
    <div className="w-40 h-40 md:w-56 md:h-56 p-1 bg-pixel-gray-accent dark:bg-pixel-red shadow-lg shadow-pixel-gray-accent dark:shadow-pixel-red mb-8 mx-auto">
        <div className="w-full h-full bg-pixel-black flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="0 0 64 64" className="transform scale-125">
                <rect fill="#222" x="20" y="20" width="24" height="24"/>
                <rect fill="#FFDDC1" x="24" y="24" width="16" height="16"/>
                <rect fill="#000" x="28" y="28" width="4" height="4"/>
                <rect fill="#000" x="36" y="28" width="4" height="4"/>
                <rect fill="#FF0000" x="28" y="36" width="12" height="4"/>
            </svg>
        </div>
    </div>
);


const About: React.FC = () => {
    // FIX: Explicitly set the generic type for useOnScreen to match the div element.
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.3 });

    return (
        <section id="about" className="min-h-screen py-20 flex items-center">
            <div
                ref={ref}
                className={`container mx-auto px-4 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className={`transform transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                    <h2 className="text-3xl md:text-4xl font-press-start mb-4">ABOUT_ME.TXT</h2>
                    <div className="w-20 h-1 bg-pixel-gray-accent dark:bg-pixel-red mx-auto mb-12"></div>
                </div>

                <div className={`grid md:grid-cols-2 gap-12 items-center transform transition-transform duration-1000 delay-200 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                    <div className="flex justify-center">
                        <PixelAvatar />
                    </div>
   <div className="text-left text-xs md:text-sm leading-relaxed glassmorphic p-6 border border-pixel-gray-accent/40 dark:border-pixel-red/40 max-w-3xl mx-auto text-gray-300">
  <p className="mb-2">
    I'm <span className="font-semibold text-red-400">Vadde Thrishank</span>, a CSE undergraduate at 
    <span className="font-semibold text-red-400"> NIT Silchar</span>, passionate about building intelligent and scalable web apps.
    Skilled in <span className="font-semibold text-red-400">React, Node.js, Express,</span> and 
    <span className="font-semibold text-red-400"> PostgreSQL</span>, with a strong foundation in 
    <span className="font-semibold text-red-400"> DSA</span>.
  </p>

  <p className="mb-2">
    I’ve developed projects from a real-time <span className="font-semibold text-red-400">ride-sharing platform</span> 
    to <span className="font-semibold text-red-400">AI-driven assistants</span> using Gemini and LangChain.
    Currently exploring <span className="font-semibold text-red-400">agentic AI</span> for intelligent automation.
  </p>

  <p>
    I aim to craft impactful, efficient solutions that merge 
    <span className="font-semibold text-red-400"> technology</span> and 
    <span className="font-semibold text-red-400"> intelligence</span> seamlessly.
  </p>
</div>


                </div>
            </div>
        </section>
    );
};

export default About;