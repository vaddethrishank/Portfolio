import React, { useState } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const Contact: React.FC = () => {
  const [ref, isVisible] = useOnScreen<HTMLElement>({ threshold: 0.1 });
  const [copied, setCopied] = useState(false);

  const email = 'vaddethrishank@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={ref} id="contact" className="py-20 min-h-[60vh] flex flex-col justify-center">
      <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        
        <div className="mb-8 text-base md:text-xl select-none">
          <span className="text-term-gray/50">root@system:</span>
          <span className="text-term-green drop-shadow-glow">~</span>
          <span className="text-term-gray/50">$ </span>
          <span className="text-term-gray/80">./establish_secure_link.sh</span>
        </div>

        <div className="border border-term-green/30 bg-[#050505] p-6 md:p-10 shadow-glow-sm relative overflow-hidden">
          {/* Subtle scanline inside the box */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] opacity-20"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-10">
            
            {/* Left Column: ASCII and Status */}
            <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-term-green/20 pb-8 lg:pb-0 lg:pr-8 flex flex-col">
              <div className="text-term-green/50 text-xs md:text-sm font-mono whitespace-pre leading-none mb-6 hidden md:block">
{`   _____ ____  __  __ __  __ 
  / ___// __ \\/ / / // / / /
  \\__ \\/ / / / / / // /_/ / 
 ___/ / /_/ / /_/ // __  /  
/____/\\____/\\____//_/ /_/   `}
              </div>
              
              <div className="space-y-2 mt-auto">
                <div className="flex justify-between text-sm uppercase tracking-widest">
                  <span className="text-term-gray/60">Status:</span>
                  <span className="text-term-green animate-pulse drop-shadow-glow">LISTENING...</span>
                </div>
                <div className="flex justify-between text-sm uppercase tracking-widest">
                  <span className="text-term-gray/60">Port:</span>
                  <span className="text-term-gray/80">443 (SECURE)</span>
                </div>
                <div className="flex justify-between text-sm uppercase tracking-widest">
                  <span className="text-term-gray/60">Response Time:</span>
                  <span className="text-term-gray/80">&lt; 12ms</span>
                </div>
              </div>
            </div>

            {/* Right Column: Connection Nodes */}
            <div className="lg:w-2/3 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl text-term-green font-bold drop-shadow-glow mb-2">
                Awaiting Transmission.
              </h3>
              <p className="text-term-gray/70 mb-8 text-lg">
                Whether you have an opportunity, a project proposal, or just want to discuss software architecture—initialize a connection below.
              </p>

              <div className="flex flex-col gap-4">
                
                {/* Email Node */}
                <div className="group border border-term-green/30 bg-term-green/5 hover:bg-term-green/10 transition-colors p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-term-green/50">[{copied ? 'COPIED' : 'MAIL_NODE'}]</span>
                    <a href={`mailto:${email}`} className="text-term-green text-lg hover:underline underline-offset-4 drop-shadow-glow">
                      {email}
                    </a>
                  </div>
                  <button 
                    onClick={handleCopy}
                    className="border border-term-green/50 px-4 py-1.5 text-sm uppercase tracking-widest text-term-green hover:bg-term-green hover:text-black transition-colors"
                  >
                    {copied ? 'Copied to Clipboard' : 'Copy Address'}
                  </button>
                </div>

                {/* GitHub Node */}
                <a href="https://github.com/vaddethrishank" target="_blank" rel="noreferrer" className="group border border-term-green/30 bg-term-green/5 hover:bg-term-green/10 transition-colors p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-term-green/50">[GIT_NODE]</span>
                    <span className="text-term-gray/80 group-hover:text-term-green transition-colors">ssh git@github.com:vaddethrishank</span>
                  </div>
                  <span className="text-term-green/30 group-hover:text-term-green transition-colors">↗</span>
                </a>

                {/* LinkedIn Node */}
                <a href="https://www.linkedin.com/in/vaddethrishank/" target="_blank" rel="noreferrer" className="group border border-term-green/30 bg-term-green/5 hover:bg-term-green/10 transition-colors p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-term-green/50">[LINK_NODE]</span>
                    <span className="text-term-gray/80 group-hover:text-term-green transition-colors">ping linkedin.com/in/vaddethrishank</span>
                  </div>
                  <span className="text-term-green/30 group-hover:text-term-green transition-colors">↗</span>
                </a>

                {/* Resume Node */}
                <a href="https://drive.google.com/file/d/1BabxbMlOC1eZLNTWK7Pz3O9GNQLk6rk8/view?usp=sharing" target="_blank" rel="noreferrer" className="group border border-term-green/30 bg-term-green/5 hover:bg-term-green/10 transition-colors p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-term-green/50">[DOC_NODE]</span>
                    <span className="text-term-gray/80 group-hover:text-term-green transition-colors">wget /public/resume.pdf</span>
                  </div>
                  <span className="text-term-green/30 group-hover:text-term-green transition-colors">↗</span>
                </a>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
