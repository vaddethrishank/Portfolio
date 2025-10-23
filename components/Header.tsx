import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../App';

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m4.93 17.66 1.41-1.41"></path><path d="m17.66 4.93 1.41-1.41"></path>
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    </svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const XIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const ResumeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
);


const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const themeContext = useContext(ThemeContext);

  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on unmount
    };
  }, [isMenuOpen]);


  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleMobileLinkClick = (id: string) => {
      scrollToSection(id);
      setIsMenuOpen(false);
  }

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' },
  ];

  const socialLinks = [
      { href: 'https://github.com/vaddethrishank', icon: <GithubIcon />, label: 'GitHub' },
      { href: 'https://www.linkedin.com/in/vaddethrishank/', icon: <LinkedinIcon />, label: 'LinkedIn' },
      { href: 'https://drive.google.com/file/d/1-UQf4LIUxKkFqIIhw6jwJfx7DtnIMTmJ/view?usp=sharing', icon: <ResumeIcon />, label: 'Resume' },
  ];

  const baseClasses = 'fixed top-0 left-0 w-full z-40 transition-all duration-300 font-press-start';
  const scrolledClasses = scrolled ? 'py-2 glassmorphic' : 'py-4';

  return (
    <>
      <header className={`${baseClasses} ${scrolledClasses}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-lg cursor-pointer hover:animate-pixel-glow text-pixel-gray-accent dark:text-pixel-red transition-all duration-300" onClick={() => scrollToSection('home')}>
            VT.PF
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-xs">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-pixel-gray-accent dark:hover:text-pixel-red transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
            <button onClick={themeContext?.toggleTheme} className="p-2 border-2 border-transparent hover:border-current rounded-none">
              {themeContext?.theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </nav>
          <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(true)} className="p-1">
                  <MenuIcon />
              </button>
          </div>
        </div>
      </header>
      
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-pixel-gray-bg/95 dark:bg-pixel-black/95 backdrop-blur-sm animate-fade-in">
            <div className="container mx-auto px-4 flex justify-end pt-5">
                 <button onClick={() => setIsMenuOpen(false)}>
                    <XIcon />
                </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-full -mt-12 space-y-8">
                 {navLinks.map((link) => (
                    <button
                        key={link.id}
                        onClick={() => handleMobileLinkClick(link.id)}
                        className="font-press-start text-2xl hover:text-pixel-gray-accent dark:hover:text-pixel-red transition-colors duration-200"
                    >
                        {link.name}
                    </button>
                ))}

                <div className="absolute bottom-24 flex space-x-6">
                    {socialLinks.map((link, index) => (
                        <a 
                            key={index} 
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="p-3 border-2 rounded-full transition-all duration-300 transform hover:scale-110
                                    border-pixel-gray-text/80 dark:border-pixel-white/80
                                    hover:bg-pixel-gray-accent hover:border-pixel-gray-accent
                                    dark:hover:bg-pixel-red dark:hover:border-pixel-red"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                <button onClick={() => {
                    themeContext?.toggleTheme();
                    setIsMenuOpen(false);
                }} className="absolute bottom-10 p-4 border-2 border-transparent hover:border-current rounded-none">
                    {themeContext?.theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                </button>
            </nav>
        </div>
      )}
    </>
  );
};

export default Header;