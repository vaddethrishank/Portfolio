import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#0a0a0a] p-2 md:p-8 items-center justify-center font-vt323 text-term-green selection:bg-term-green selection:text-term-black">
      {/* MacOS Window Frame */}
      <div className="w-full max-w-6xl h-full flex flex-col bg-term-window rounded-xl border border-[#333] shadow-2xl shadow-term-green/10 overflow-hidden relative">
        
        {/* Title Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-term-titlebar border-b border-[#333] select-none z-10 relative">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_5px_#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_5px_#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_5px_#27c93f]"></div>
          </div>
          <div className="text-gray-400 text-xs md:text-sm font-fira-code tracking-wider opacity-70">
            thrishank@portfolio ~ bash - 120x30
          </div>
          <div className="w-12"></div> {/* Spacer for centering */}
        </div>

        {/* Tmux-style Nav Bar */}
        <Header />

        {/* Terminal Content Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative scroll-smooth p-6 md:p-10 bg-term-black shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]" id="main-editor">
          {/* Scanline Effect */}
          <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]"></div>
          
          <main className="relative z-10 max-w-5xl mx-auto flex flex-col gap-20">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            
            {/* Terminal Prompt at bottom */}
            <div className="pb-10 mt-10">
              <span className="text-term-green font-bold text-xl md:text-2xl drop-shadow-glow">➜</span> 
              <span className="text-term-gray ml-2 text-xl md:text-2xl">~</span>
              <span className="animate-blink ml-2 text-xl md:text-2xl drop-shadow-glow">█</span>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
