import React from 'react';

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="py-8 z-20 relative glassmorphic border-t-2 border-pixel-gray-accent/50 dark:border-pixel-red/50">
      <div className="container mx-auto px-4 text-center text-xs font-press-start">
        <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/vaddethrishank" className="hover:text-pixel-gray-accent dark:hover:text-pixel-red transition-colors"><GithubIcon /></a>
            <a href="https://www.linkedin.com/in/vaddethrishank/" className="hover:text-pixel-gray-accent dark:hover:text-pixel-red transition-colors"><LinkedinIcon /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} PIXEL PORTFOLIO. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;