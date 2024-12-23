import { useEffect, useState, useRef} from 'react';

import AboutMe from "./components/aboutMe.jsx"
import Experience from "./components/experience.jsx"
import MyWork from "./components/myWork.jsx"

import GithubLogo from './assets/github.png'
import MailLogo from './assets/mail.png'
import LinkedInLogo from './assets/linkedin.png'

import 'reactjs-popup/dist/index.css';
import './Popup.css'

import * as THREE from 'three';
import TRUNK from 'vanta/src/vanta.trunk'

const App = () => {

  useEffect(() => {

    TRUNK({
      el: "#trunkEffect",
      mouseControls: true,
      THREE: THREE,
      touchControls: true,
      gyroControls: false,
      scale: 15.00,
      scaleMobile: 1.00,
      color: 0x9Be0e0,
      backgroundColor: 0x17182d,
      spacing: 4.50,
      chaos: 3.50
    })

  }, []);

  return (
    <div className='bg-backgroundColor'>
    <div className='overflow-y-scroll max-h-screen snap-y snap-mandatory scroll-smooth'>


    <div id="introduction" className='flex justify-between w-full'>
      
      <div id="trunkEffect" style={{
         width: '50%',
         height: '100vh',
       }}>
      </div>

      <div className='snap-always snap-center flex font-inter flex-col mt-15.5% mb-30% mr-4% justify-right items-right'>
        <div className='text-right'>
          <h1 className="text-heading(default) sm:text-heading(sm) md:text-heading(md) xl:text-heading(xl) text-textColor font-bold">
            Hi, I'm Hristo
          </h1>
        </div>

        <div className='text-right'>
          <h3 className="text-subheading(default) sm:text-subheading(sm) md:text-subheading(md) xl:text-subheading(xl) font-bold text-white">
            Software Developer 
          </h3>
        </div>
      </div>

    </div>
     
      
      <div className='snap-always snap-center mb-5% pb-5% w-100%'> 
       <AboutMe/>
      </div>

      <div className='mt-10% mb-5%'>
        <Experience/>
      </div>

        <div className='flex font-inter flex-col justify-center items-center'>
       
       <MyWork/>

        </div>

        <div className='snap-always snap-end mt-10% bg-secondaryColor p-2% w-100%'>
            <div className='flex justify-center'>

                <a href="https://github.com/TanzerDx" className='rounded-3xl h-40% w-3% ml-1% mr-1%'>
                  <img src={GithubLogo} alt="GithubLogo" />
                </a>

                <a href="https://www.linkedin.com/in/hristo-ganchev-15b3b724b/"  className='rounded-3xl h-40% w-3% ml-1% mr-1%'>
                  <img src={LinkedInLogo} alt="LinkedInLogo" />
                </a>

                <a href="mailto:hristoganchev3@gmail.com" className='rounded-3xl h-40% w-3% ml-1% mr-1%'>
                  <img src={MailLogo} alt="MailLogo" />
                </a>

            </div>
        </div>

  </div>
  </div>
  );
}

export default App;