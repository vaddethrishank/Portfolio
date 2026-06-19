import React, { useState } from 'react';

const FilesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const SourceControlIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="18" r="3"></circle>
    <circle cx="6" cy="6" r="3"></circle>
    <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
    <line x1="6" y1="9" x2="6" y2="21"></line>
  </svg>
);

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 118 118" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M59 11C28.2 11 11 28.2 11 59s17.2 48 48 48 48-17.2 48-48S89.8 11 59 11zm0 86.8c-26.6 0-41.2-14.6-41.2-41.2S32.4 15.4 59 15.4 100.2 30 100.2 56.6 85.6 97.8 59 97.8z" fill="#00d8ff"/>
    <ellipse cx="59" cy="59" rx="20" ry="8" transform="rotate(30 59 59)" fill="#00d8ff"/>
    <ellipse cx="59" cy="59" rx="20" ry="8" transform="rotate(-30 59 59)" fill="#00d8ff"/>
    <ellipse cx="59" cy="59" rx="20" ry="8" transform="rotate(90 59 59)" fill="#00d8ff"/>
    <circle cx="59" cy="59" r="3.5" fill="#00d8ff"/>
  </svg>
);

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', name: 'Hero.tsx', icon: <ReactIcon /> },
    { id: 'about', name: 'About.tsx', icon: <ReactIcon /> },
    { id: 'projects', name: 'Projects.tsx', icon: <ReactIcon /> },
    { id: 'skills', name: 'Skills.tsx', icon: <ReactIcon /> },
    { id: 'contact', name: 'Contact.tsx', icon: <ReactIcon /> },
  ];

  return (
    <div className="flex h-full bg-vscode-sidebar border-r border-[#3c3c3c]">
      {/* Activity Bar */}
      <div className="w-12 h-full bg-vscode-activityBar flex flex-col items-center py-4 space-y-6">
        <button className="text-vscode-fg hover:text-white transition-colors">
          <FilesIcon />
        </button>
        <button className="text-gray-500 hover:text-white transition-colors">
          <SearchIcon />
        </button>
        <button className="text-gray-500 hover:text-white transition-colors">
          <SourceControlIcon />
        </button>
      </div>

      {/* Explorer Pane */}
      <div className="w-64 h-full flex flex-col text-sm">
        <div className="p-3 text-xs tracking-wider text-gray-400">
          EXPLORER
        </div>
        
        <div className="flex flex-col">
          <button 
            className="flex items-center px-1 py-1 hover:bg-[#2a2d2e] w-full text-left"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="mr-1 text-gray-400">
              {isOpen ? <ChevronDown /> : <ChevronRight />}
            </span>
            <span className="font-bold">PORTFOLIO</span>
          </button>
          
          {isOpen && (
            <div className="flex flex-col ml-2 mt-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="flex items-center px-4 py-1.5 hover:bg-[#2a2d2e] text-gray-300 hover:text-white w-full text-left"
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
