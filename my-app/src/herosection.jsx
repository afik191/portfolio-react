import React from 'react';
import './index.css';
import computer from './assets/computer-svg.svg'

const HeroSection = () => {
  return (
   <main className='flex-grow'>
       <section id="HeroSection" className='py-20 md:py-32 bg-gradient-to-br from-white to-secondary min-h-svh flex flex-col justify-center'>
         <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
              <div  className='text-center md:text-left'>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    Hello there, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary'>Afik</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
                 A recent graduate in Computer Science passionate about web development, AI, and more. Eager to learn, grow, and contribute in a hands-on, real-world environment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 hover:-translate-y-1 h-12 rounded-full px-8 shadow-[0_4px_14px_0_rgba(30,58,138,0.39)] hover:shadow-[0_6px_20px_rgba(30,58,138,0.23)]" href="#contact">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail mr-2 h-5 w-5">
                    <rect width="20" height="16" x="2" y="4" rx="2">
                        </rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7">
                            </path>
                            </svg> Get in Touch</a>
                            <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-slate-200 bg-white hover:bg-slate-50 hover:-translate-y-1 hover:border-slate-300 text-slate-700 h-12 rounded-full px-8 shadow-sm hover:shadow-md" href="/resume.pdf"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-to-line mr-2 h-5 w-5"><path d="M12 17V3"></path><path d="m6 11 6 6 6-6"></path><path d="M19 21H5"></path></svg> View Resume</a></div>
              </div>
              <div className='flex justify-center relative'>
                  <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full w-64 h-64 mx-auto my-auto animate-pulse"></div>
                  <img src={computer} alt="Computer illustration" className='size-80 md:size-96 relative z-10 drop-shadow-2xl transition-transform duration-500 hover:scale-105'/>  
              </div>
             
            </div>
            
         </div>
       </section>

   </main>   
 
  )
};

export default HeroSection;
