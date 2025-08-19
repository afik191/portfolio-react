// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './navbar.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import HeroSection from './herosection.jsx';
import EducationAndSkills from './education.jsx';
import Projects from './projects.jsx';
import Contact from './contact.jsx';
import { Analytics } from "@vercel/analytics/react"
import LegalBanner from './LegalBanner.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <React.StrictMode>
    <div > 
     <Navbar/>
     <HeroSection/>
     <EducationAndSkills/>
     <Projects/>
     <Contact/>
     <LegalBanner/>
     <Analytics/>
   </div>
  </React.StrictMode>
);
