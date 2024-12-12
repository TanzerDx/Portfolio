import { useEffect, useState, useRef} from 'react';

import AboutMe from "./components/aboutMe.jsx"
import Experience from "./components/experience.jsx"
import MyWork from "./components/myWork.jsx"

import GithubLogo from './assets/github.png'
import MailLogo from './assets/mail.png'
import LinkedInLogo from './assets/linkedin.png'

import 'reactjs-popup/dist/index.css';
import './Popup.css'

import VANTA from 'vanta';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min'


const App = () => {
  

    useEffect(() => {
        WAVES({
          el: "#introduction",
          THREE: THREE,
          color: 0x888889
        })
      }
    , []);


    useEffect(() => {
        
    function sleep(ms) {
      return new Promise((resolve) => 
        setTimeout(resolve, ms)
      );
    }

    const phrase = "Hi, I'm Hristo";
    const element = document.getElementById('typewriter-signin');
    let sleepTime = 50;

    const writePhrase = async () => {
      for (let i = 0; i < phrase.length; i++) {
        element.innerText = phrase.substring(0, i + 1);
        
        if (element.innerText === "Hi,") 
        {
          await sleep(160);
        }

        await sleep(sleepTime);
      }
    };
  
    writePhrase();
  }, []);


  return (
    <>
    <div className='overflow-y-scroll max-h-screen snap-y snap-mandatory scroll-smooth'>

      <div id="introduction" className='h-100%'>
        <div className='snap-always snap-center flex font-inter flex-col mt-15.5% mb-30% justify-center items-center'>
          <div className='text-center'>
            <h1 className="text-heading(default) sm:text-heading(sm) md:text-heading(md) xl:text-heading(xl) text-red-700 font-bold">
              <span id="typewriter-signin"></span>
            </h1>
          </div>

          <div className='text-center'>
              <h3 className="text-subheading(default) sm:text-subheading(sm) md:text-subheading(md) xl:text-subheading(xl) font-bold">
                Full Stack Software Developer 
              </h3>
          </div>
        </div>
      </div>
      
      <div className='snap-always snap-center bg-red-700 mb-5% pb-5% w-100%'> 
       <AboutMe/>
      </div>

      <div className='mt-10% mb-5%'>
        <Experience/>
      </div>

        <div className='flex font-inter flex-col justify-center items-center'>
       
       <MyWork/>

        </div>

        <div className='snap-always snap-end mt-10% bg-red-700 p-2% w-100%'>
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
    </>
  );
}

export default App;