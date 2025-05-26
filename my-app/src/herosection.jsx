import React from 'react';
import './index.css';
import computer from './assets/computer-svg.svg'



const HeroSection = () => {
  return (
   <main className='flex-grow bg-white'>
       <section id="HeroSection" className='py-20 md:py-32 bg-secondary/30 min-h-svh flex flex-col justify-center'>
         <div className='container mx-auto px-4 sm:px-6 lg:px-8er'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
              <div  className='text-center md:text-left'>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                    Hello there, I'm  <h1 className=' text-blue-300'> Afik </h1>
                </h1>
                <p class="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
                 Second-year Computer Science student passionate about web development and AI. Eager to learn, grow, and contribute in a hands-on, real-world environment.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a class=" bg-slate-400  inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 shadow-md hover:shadow-lg transition-shadow" href="#contact">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail mr-2 h-5 w-5">
                    <rect width="20" height="16" x="2" y="4" rx="2">
                        </rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7">
                            </path>
                            </svg> Get in Touch</a>
                            <a target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 shadow-md hover:shadow-lg transition-shadow" href="/resume.pdf"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-to-line mr-2 h-5 w-5"><path d="M12 17V3"></path><path d="m6 11 6 6 6-6"></path><path d="M19 21H5"></path></svg> View Resume</a></div>
              </div>
              <div className='flex justify-center'>
                  <img src={computer} alt="Computer illustration" className='size-80 '/>  
              </div>
             
            </div>
            

         </div>
       </section>

   </main>   
 

  )
};

export default HeroSection;
