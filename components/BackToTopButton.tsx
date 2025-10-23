import React, { useState, useEffect } from 'react';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 p-3 border-2
                 border-pixel-gray-accent dark:border-pixel-red
                 bg-pixel-gray-bg/80 dark:bg-pixel-black/80
                 text-pixel-gray-accent dark:text-pixel-red
                 hover:bg-pixel-gray-accent dark:hover:bg-pixel-red
                 hover:text-pixel-black dark:hover:text-black
                 transition-all duration-300 transform
                 hover:-translate-y-1 hover:animate-pixel-shake
                 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
      aria-label="Go to top"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0L0 8H4V16H12V8H16L8 0Z" />
      </svg>
    </button>
  );
};

export default BackToTopButton;