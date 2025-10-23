import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string; // optional
  repoUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, liveUrl, repoUrl }) => {
  return (
    <div className="group flex-shrink-0 w-80 md:w-96 glassmorphic p-4 border-2 border-pixel-gray-accent/20 dark:border-pixel-red/20
                   hover:border-pixel-gray-accent dark:hover:border-pixel-red
                   transition-all duration-300 transform hover:-translate-y-2
                   shadow-md shadow-pixel-gray-accent/20 dark:shadow-md dark:shadow-pixel-red/20
                   hover:shadow-lg hover:shadow-pixel-gray-accent/50 dark:hover:shadow-lg dark:hover:shadow-pixel-red/50
    ">
      <div className="relative w-full h-48 mb-4 overflow-hidden border-2 border-pixel-gray-text/80 dark:border-pixel-black">
        <img 
          src={imageUrl} 
          alt={title} 
          loading="lazy" 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
        />
      </div>
      <h3 className="font-press-start text-lg mb-2 truncate">{title}</h3>
      <p className="text-xs h-20 overflow-y-auto mb-4">{description}</p>
      <div className="flex justify-end space-x-2 font-press-start text-xs">
        {liveUrl && (
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-3 py-1 border-2 border-current hover:bg-pixel-gray-accent dark:hover:bg-pixel-red hover:text-pixel-black dark:hover:text-black transition-colors duration-200"
          >
            LIVE
          </a>
        )}
        <a 
          href={repoUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-3 py-1 border-2 border-current hover:bg-pixel-gray-accent dark:hover:bg-pixel-red hover:text-pixel-black dark:hover:text-black transition-colors duration-200"
        >
          CODE
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
