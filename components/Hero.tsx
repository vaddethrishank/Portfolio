import React, { useState, useEffect, useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const ResumeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
);


const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showSocials, setShowSocials] = useState(true);
  const [ref, isVisible] = useOnScreen<HTMLElement>({ threshold: 0.5 });


  const phrases = useRef(["FullStack Developer", "Agentic AI Builder"]);
  const period = 2000; // Time to pause after typing a full phrase
useEffect(() => {
  const ticker = setTimeout(() => {
    const i = loopNum % phrases.current.length;
    const fullText = phrases.current[i];

    const updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // Slow down typing and deleting for smoother cursor effect
    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => setIsDeleting(true), period); // pause before deleting
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  }, typingSpeed); // typingSpeed now controls interval properly

  return () => clearTimeout(ticker);
}, [text, isDeleting, loopNum, typingSpeed]);

  // useEffect(() => {
  //   let ticker: number;
  //   const handleTyping = () => {
  //       const i = loopNum % phrases.current.length;
  //       const fullText = phrases.current[i];
        
  //       const updatedText = isDeleting 
  //           ? fullText.substring(0, text.length - 1)
  //           : fullText.substring(0, text.length + 1);

  //       setText(updatedText);

  //       if (isDeleting) {
  //           setTypingSpeed(111111);
  //       }

  //       if (!isDeleting && updatedText === fullText) {
  //           setTypingSpeed(period);
  //           setIsDeleting(true);
  //       } else if (isDeleting && updatedText === '') {
  //           setIsDeleting(false);
  //           setLoopNum(loopNum + 1);
  //           setTypingSpeed(150);
  //       }
  //   }

  //   // Only start typing animation after initial fade-in
  //   if (isVisible) {
  //     const startTypingTimeout = setTimeout(() => {
  //         ticker = window.setTimeout(handleTyping, typingSpeed);
  //     }, 1200);

  //     return () => {
  //         clearTimeout(startTypingTimeout);
  //         clearTimeout(ticker);
  //     };
  //   }
  // }, [text, isDeleting, loopNum, typingSpeed, isVisible]);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowSocials(window.scrollY < window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const socialLinks = [
      { href: 'https://github.com/vaddethrishank', icon: <GithubIcon />, label: 'GitHub', delay: '300ms' },
      { href: 'https://www.linkedin.com/in/vaddethrishank/', icon: <LinkedinIcon />, label: 'LinkedIn', delay: '400ms' },
      { href: 'https://drive.google.com/file/d/1-UQf4LIUxKkFqIIhw6jwJfx7DtnIMTmJ/view?usp=sharing', icon: <ResumeIcon />, label: 'Resume', delay: '500ms' },
  ];

  return (
    <section ref={ref} id="home" className="h-screen flex items-center justify-center text-center relative">
      <div className={`hidden md:flex flex-col gap-4 absolute bottom-24 right-5 lg:right-10 z-20 transition-opacity duration-300 ${showSocials ? 'opacity-100' : 'opacity-0'}`}>
          {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`p-2 border-2 rounded-full transform hover:scale-110 transition-all duration-500
                            border-pixel-gray-text/50 dark:border-pixel-white/50
                            hover:bg-pixel-gray-accent hover:border-pixel-gray-accent
                            dark:hover:bg-pixel-red dark:hover:border-pixel-red
                            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                style={{ transitionDelay: link.delay }}
              >
                {link.icon}
              </a>
          ))}
      </div>
      
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-4xl font-press-start mb-4 animate-pixel-glow flex flex-col justify-center items-center">
          <span className={`text-pixel-gray-text dark:text-pixel-white mb-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{transitionDelay: '200ms'}}>
            Hi, I'M Thrishank A
          </span>
          <span className="text-pixel-gray-accent dark:text-pixel-red whitespace-nowrap min-h-[3rem] md:min-h-[3.5rem] flex items-center">
            {text}
            <span className="animate-fast-pulse">_</span>
          </span>
        </h1>
        <p className={`text-sm md:text-base mb-8 max-w-2xl mx-auto transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{transitionDelay: '400ms'}}>
         Building Scalable, Intelligent, and User-Focused Web Solutions.
        </p>
        <button
          onClick={scrollToContact}
          className={`font-press-start text-sm px-6 py-3 border-2 border-pixel-gray-accent text-pixel-gray-accent dark:border-pixel-red dark:text-pixel-red
                     relative group overflow-hidden transition-shadow duration-300
                     hover:shadow-pixel-gray-accent dark:hover:shadow-pixel-red
                     transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{transitionDelay: '600ms'}}
        >
          <span className="absolute inset-0 bg-pixel-gray-accent dark:bg-pixel-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          <span className="relative group-hover:text-pixel-black dark:group-hover:text-pixel-black">GET IN TOUCH</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;