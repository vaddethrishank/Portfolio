import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../App';

const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const themeContext = useContext(ThemeContext);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    } else {
      setScrollProgress(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    handleScroll(); // Call on mount to set initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const progressBarColor = themeContext?.theme === 'dark' 
    ? 'bg-pixel-red' 
    : 'bg-pixel-gray-accent';

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 pointer-events-none">
      <div
        className={`h-full ${progressBarColor} transition-width duration-100 ease-linear`}
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;
