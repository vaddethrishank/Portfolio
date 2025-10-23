// import React, { useState } from 'react';
// import useOnScreen from '../hooks/useOnScreen';

// const Contact: React.FC = () => {
//   const [status, setStatus] = useState('');
//   const [ref, isVisible] = useOnScreen<HTMLElement>({ threshold: 0.2 });


//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setStatus('Sending...');
//     // Mock form submission
//     setTimeout(() => {
//       setStatus('Message sent! (Not really, this is a demo)');
//       setTimeout(() => setStatus(''), 3000);
//       (e.target as HTMLFormElement).reset();
//     }, 1500);
//   };

//   const inputClasses = "w-full p-3 bg-transparent border-2 border-pixel-gray-text/50 dark:border-pixel-white/50 focus:outline-none focus:border-pixel-gray-accent dark:focus:border-pixel-red text-sm font-press-start transition-colors";

//   return (
//     <section ref={ref} id="contact" className="min-h-screen py-20 flex items-center bg-pixel-gray-text/5 dark:bg-black/20">
//       <div className="container mx-auto px-4 text-center">
//         <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h2 className="text-3xl md:text-4xl font-press-start mb-4">CONTACT.MSG</h2>
//           <div className="w-20 h-1 bg-pixel-gray-accent dark:bg-pixel-red mx-auto mb-12"></div>
//         </div>
        
//         <div className={`max-w-xl mx-auto glassmorphic p-8 border-2 border-pixel-gray-accent/50 dark:border-pixel-red/50 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
//             <form onSubmit={handleSubmit} className="space-y-6">
//                 <input type="text" name="name" placeholder="NAME:" required className={inputClasses} />
//                 <input type="email" name="email" placeholder="EMAIL:" required className={inputClasses} />
//                 <textarea name="message" placeholder="MESSAGE:" rows={5} required className={inputClasses}></textarea>
//                 <button
//                   type="submit"
//                   className="font-press-start text-sm w-full px-6 py-3 border-2 border-pixel-gray-accent text-pixel-gray-accent dark:border-pixel-red dark:text-pixel-red
//                              relative group overflow-hidden transition-shadow duration-300
//                              hover:shadow-pixel-gray-accent dark:hover:shadow-pixel-red disabled:opacity-50"
//                   disabled={status.startsWith('Sending')}
//                 >
//                   <span className="absolute inset-0 bg-pixel-gray-accent dark:bg-pixel-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
//                   <span className="relative group-hover:text-pixel-black dark:group-hover:text-pixel-black">SEND MESSAGE</span>
//                 </button>
//             </form>
//             {status && <p className="mt-4 text-xs font-press-start">{status}</p>}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { sendForm } from '@emailjs/browser';
import useOnScreen from '../hooks/useOnScreen';

const Contact: React.FC = () => {
  const [status, setStatus] = useState('');
  const [ref, isVisible] = useOnScreen<HTMLElement>({ threshold: 0.2 });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    const form = e.target as HTMLFormElement;

    sendForm('', '', form, '')
      .then(
        () => {
          setStatus('Message sent!');
          form.reset();
          setTimeout(() => setStatus(''), 3000);
        },
        (err) => {
          setStatus('Failed to send message. Try again later.');
          console.error(err);
        }
      );
  };

  const inputClasses = "w-full p-3 bg-transparent border-2 border-pixel-gray-text/50 dark:border-pixel-white/50 focus:outline-none focus:border-pixel-gray-accent dark:focus:border-pixel-red text-sm font-press-start transition-colors";

  return (
    <section ref={ref} id="contact" className="min-h-screen py-20 flex items-center bg-pixel-gray-text/5 dark:bg-black/20">
      <div className="container mx-auto px-4 text-center">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-press-start mb-4">CONTACT.MSG</h2>
          <div className="w-20 h-1 bg-pixel-gray-accent dark:bg-pixel-red mx-auto mb-12"></div>
        </div>

        <div className={`max-w-xl mx-auto glassmorphic p-8 border-2 border-pixel-gray-accent/50 dark:border-pixel-red/50 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" name="name" placeholder="NAME:" required className={inputClasses} />
            <input type="email" name="email" placeholder="EMAIL:" required className={inputClasses} />
            <textarea name="message" placeholder="MESSAGE:" rows={5} required className={inputClasses}></textarea>
            <button
              type="submit"
              className="font-press-start text-sm w-full px-6 py-3 border-2 border-pixel-gray-accent text-pixel-gray-accent dark:border-pixel-red dark:text-pixel-red relative group overflow-hidden transition-shadow duration-300 hover:shadow-pixel-gray-accent dark:hover:shadow-pixel-red disabled:opacity-50"
              disabled={status.startsWith('Sending')}
            >
              <span className="absolute inset-0 bg-pixel-gray-accent dark:bg-pixel-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative group-hover:text-pixel-black dark:group-hover:text-pixel-black">SEND MESSAGE</span>
            </button>
          </form>
          {status && <p className="mt-4 text-xs font-press-start">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
