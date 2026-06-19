import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#007acc] text-white flex items-center justify-between px-3 py-1 text-xs select-none">
      <div className="flex items-center space-x-4">
        <a href="https://github.com/vaddethrishank" target="_blank" rel="noopener noreferrer" className="hover:bg-white/20 px-2 py-0.5 rounded cursor-pointer flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          main*
        </a>
        <div className="flex items-center hover:bg-white/20 px-2 py-0.5 rounded cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          0
        </div>
        <div className="flex items-center hover:bg-white/20 px-2 py-0.5 rounded cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          0
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <span className="hover:bg-white/20 px-2 py-0.5 rounded cursor-pointer">Ln 1, Col 1</span>
        <span className="hover:bg-white/20 px-2 py-0.5 rounded cursor-pointer">Spaces: 2</span>
        <span className="hover:bg-white/20 px-2 py-0.5 rounded cursor-pointer">UTF-8</span>
        <span className="hover:bg-white/20 px-2 py-0.5 rounded cursor-pointer">LF</span>
        <span className="hover:bg-white/20 px-2 py-0.5 rounded cursor-pointer hidden md:block">TypeScript React</span>
      </div>
    </footer>
  );
};

export default Footer;