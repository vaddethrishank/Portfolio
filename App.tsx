import React, { useState, useEffect, createContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from './components/Particles';
import BackToTopButton from './components/BackToTopButton';
import Loader from './components/Loader';
import ScrollProgressBar from './components/ScrollProgressBar';

export const ThemeContext = createContext<{ theme: string; toggleTheme: () => void; } | null>(null);

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('bg-pixel-gray-bg', 'text-pixel-gray-text');
      document.body.classList.add('bg-pixel-black', 'text-pixel-white');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.add('bg-pixel-gray-bg', 'text-pixel-gray-text');
      document.body.classList.remove('bg-pixel-black', 'text-pixel-white');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'gray' : 'dark'));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="relative overflow-x-hidden transition-colors duration-500">
        <ScrollProgressBar />
        <Particles />
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
