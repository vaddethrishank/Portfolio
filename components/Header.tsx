import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is near the top of the viewport
          if (rect.top >= -100 && rect.top <= 300) {
            setActiveTab(section);
          }
        }
      }
    };

    const container = document.getElementById('main-editor');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const tabs = [
    { id: 'home', name: 'home' },
    { id: 'about', name: 'about' },
    { id: 'projects', name: 'projects' },
    { id: 'skills', name: 'skills' },
    { id: 'contact', name: 'contact' },
  ];

  return (
    <div className="flex bg-[#0a0a0a] border-b border-term-green/20 overflow-x-auto select-none z-20 text-sm md:text-base font-vt323 tracking-widest relative">
      <div className="flex w-full">
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`flex items-center px-4 py-2 transition-all duration-200 whitespace-nowrap outline-none uppercase
                ${isActive 
                  ? 'bg-term-green text-black font-bold shadow-[0_0_10px_rgba(57,255,20,0.5)_inset]' 
                  : 'text-term-gray/60 hover:text-term-green hover:bg-term-green/5 border-r border-term-green/10'
                }`}
            >
              <span className={isActive ? 'text-black/60 mr-2' : 'text-term-green/40 mr-2'}>{index}:</span>
              {tab.name}
              {isActive && <span className="ml-2 animate-blink text-black/80">█</span>}
            </button>
          );
        })}
        {/* Fill remaining space with a mock status string */}
        <div className="flex-grow bg-[#0a0a0a] border-l border-term-green/10 hidden md:flex justify-end items-center px-4 text-term-gray/40 text-xs tracking-widest">
          "portfolio_v1.0" [readonly] -- 100% --
        </div>
      </div>
    </div>
  );
};

export default Header;