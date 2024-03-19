import { useEffect, useState } from 'react';
import Picture from './assets/Me.jpg'
import { Carousel } from 'react-responsive-carousel';
import GithubLogo from './assets/github.png'
import MailLogo from './assets/mail.png'
import LinkedInLogo from './assets/linkedin.png'
import ReactLogo from './assets/React.png'
import SpringLogo from './assets/Spring.png'
import JavaLogo from './assets/Java.png'
import JSLogo from './assets/JavaScript.png'
import HTML5Logo from './assets/HTML5.png'
import DockerLogo from './assets/Docker.png'
import TailwindLogo from './assets/Tailwind.png'
import CSLogo from './assets/CS.png'
import CSSLogo from './assets/CSS.png'
import PythonLogo from './assets/Python.png'
import MySQLLogo from './assets/MySQL.png'
import ASPNETLogo from './assets/ASP.NET.png'
import Ticketpass from './assets/Screenshot_61.png'


const App = () => {
  
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
          await sleep(400);
        }

        await sleep(sleepTime);
      }
    };
  
    writePhrase();
  }, []);

  return (
    <>
      <div className='flex font-inter flex-col mt-15.5% mb-30% justify-center items-center'>
        <div className='text-center'>
          <h1 className="text-heading(default) sm:text-heading(sm) md:text-heading(md) xl:text-heading(xl) text-red-700 font-bold">
            <span id="typewriter-signin"></span><span id="cursor-signin">|</span>
          </h1>
        </div>

        <div className='text-center'>
            <h3 className="text-subheading(default) sm:text-subheading(sm) md:text-subheading(md) xl:text-subheading(xl) font-bold">
              Full Stack Junior Software Developer 
            </h3>
        </div>
      </div>

      <div className='bg-red-700 mb-5% pb-5% w-100%'>
       
        <div className='flex w-100% mt-2% text-white'>
            
            <div className='text-white w-60%'>
              <h1 className='text-aboutMe(default) sm:text-aboutMe(sm) md:text-aboutMe(md) xl:text-aboutMe(xl) font-inter font-bold ml-10%'>
                  About me
              </h1>
                      
              <h1 className='text-aboutMeText(default) sm:text-aboutMeText(sm) md:text-aboutMeText(md) xl:text-aboutMeText(xl) font-inter font-bold ml-2% mt-2%'>
                I am currently a fourth-semester ICT & Software Engineering student based in Eindhoven, the Netherlands. 
              </h1>

              <h1 className='text-aboutMeText(default) sm:text-aboutMeText(sm) md:text-aboutMeText(md) xl:text-aboutMeText(xl) font-inter font-bold ml-2% mt-2%'>
                I am serious in my career development and I am always eager to learn something new. 
                I can work both independently and in a team setting. If you are looking for a young professional, this is the right place.
              </h1>
            </div>


            <div className='w-40%'>
              <img className="w-60% h-35% mt-13% mr-10% ml-23%" src={Picture} alt="Hristo's Picture" />
            </div>

          </div>
      </div>

      <div className='flex font-inter flex-col mt-10% mb-5% justify-center items-center'>
        <div className='text-center'>
          <h1 className="text-heading(sm) text-red-700 font-bold md:text-heading(md) xl:text-heading(xl)">
            Experience
          </h1>
        </div>

        <div className='text-center'>
            <h3 className="text-experience(sm) md:text-experience(md) xl:text-experience(xl) font-bold w-100% ">
            For my two-year software experience, these are 
              the main technologies I have worked with:
            </h3>
        </div>

        <div className='grid grid-cols-2 gap-x-5% gap-y-10% pl-10% pr-10% pt-3% pb-10% md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
          
        <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300'>   
          <div className='p-5% bg-red-700 w-60% h-100%  rounded-3xl'>
            <img className="pt-6%" src={ReactLogo} alt="ReactLogo" />
          </div>
          <div className='justify-center items-center'>
            <h1 className='font-inter font-bold text-technology mt-10% text-center'>React</h1>
          </div>
        </div>

        <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300'>   
          <div className='p-5% bg-red-700 w-60% h-100% rounded-3xl'>
            <img className="p-6%" src={SpringLogo} alt="SpringLogo" />
          </div>
          <div className='justify-center items-center'>
            <h1 className='font-inter font-bold text-technology mt-10% text-center'>Spring</h1>
          </div>
        </div>

        <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300'>   
          <div className='p-5% bg-red-700 w-60% h-100% rounded-3xl'>
            <img className="p-6%" src={JavaLogo} alt="JavaLogo" />
          </div>
          <div className='justify-center items-center'>
            <h1 className='font-inter font-bold text-technology mt-13% text-center'>Java</h1>
          </div>
        </div>

        <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300'>   
          <div className='p-5% bg-red-700 w-60% h-100% rounded-3xl'>
            <img className="p-6% rounded-2xl" src={JSLogo} alt="JavaScriptLogo" />
          </div>
          <div className='justify-center items-center'>
            <h1 className='font-inter font-bold text-technology mt-7% text-center'>JavaScript</h1>
          </div>
        </div>

        <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300'>   
          <div className='p-5% bg-red-700 w-60% h-100% rounded-3xl'>
            <img className="p-6%" src={HTML5Logo} alt="HTML5Logo" />
          </div>
          <div className='justify-center items-center'>
            <h1 className='font-inter font-bold text-technology mt-10% text-center'>HTML5</h1>
          </div>
        </div>

        <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300'>   
          <div className='p-5% bg-red-700 w-60% h-100% rounded-3xl'>
            <img className="pl-6% pt-8%" src={DockerLogo} alt="DockerLogo" />
          </div>
          <div className='justify-center items-center'>
            <h1 className='font-inter font-bold text-technology mt-10% text-center'>Docker</h1>
          </div>
        </div>

        <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300'>   
          <div className='p-5% bg-red-700 w-60% h-100% rounded-3xl'>
            <img className="p-6%" src={TailwindLogo} alt="TailwindLogo" />
          </div>
          <div className='justify-center items-center'>
            <h1 className='font-inter font-bold text-technology mt-10% text-center'>Tailwind</h1>
          </div>
        </div>

        <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300'>   
          <div className='p-5% bg-red-700 w-60% h-100% rounded-3xl'>
            <img className="p-6%" src={CSLogo} alt="CSLogo" />
          </div>
          <div className='justify-center items-center'>
            <h1 className='font-inter font-bold text-technology mt-23% text-center'>C#</h1>
          </div>
        </div>

        <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300'>   
          <div className='p-5% bg-red-700 w-60% h-100% rounded-3xl'>
            <img className="p-6%" src={CSSLogo} alt="CSSLogo" />
          </div>
          <div className='justify-center items-center'>
            <h1 className='font-inter font-bold text-technology mt-20% text-center'>CSS</h1>
          </div>
        </div>

        <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300'>   
          <div className='p-5% bg-red-700 w-60% h-100% rounded-3xl'>
            <img className="p-6%" src={PythonLogo} alt="PythonLogo" />
          </div>
          <div className='justify-center items-center'>
            <h1 className='font-inter font-bold text-technology mt-10% text-center'>Python</h1>
          </div>
        </div>

        <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300'>   
          <div className='p-5% bg-red-700 w-60% h-100% rounded-3xl'>
            <img className="p-6%" src={MySQLLogo} alt="MySQLLogo" />
          </div>
          <div className='justify-center items-center'>
            <h1 className='font-inter font-bold text-technology mt-10% text-center'>MySQL</h1>
          </div>
        </div>

        <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300'>   
          <div className='p-5% bg-red-700 w-60% h-100% rounded-3xl'>
            <img className="p-6%" src={ASPNETLogo} alt="ASP.NETLogo" />
          </div>
          <div className='justify-center items-center'>
            <h1 className='font-inter font-bold text-technology mt-10% text-center'>ASP.NET</h1>
          </div>
        </div>

        </div>

      </div>

        <div className='flex font-inter flex-col justify-center items-center'>
        <div className='text-center'>
          <h1 className="text-heading(sm) text-red-700 font-bold md:text-heading(md) xl:text-heading(xl)">
            My work
          </h1>
        </div>

        <Carousel className="w-60% ml-11.5%">
      
            <div>
              <div key="1" className='bg-red-700 mb-5% pb-5% w-80% h-50% justify-center rounded-3xl'>
                      <img className=" w-100% h-100% rounded-3xl" src={Ticketpass} alt="Ticketpass" />
                  
                      <h1 className='font-inter font-bold text-white mt-2% text-center text-projectHeading'>Ticketpass</h1>

                    <div className='grid grid-cols-5 gap-x-5% gap-y-10% pl-10% pr-10% pt-3% pb-3%'>       
                      
                        <div className=' bg-red-200 w-100% h-150% rounded-3xl'>
                          <div className='justify-center items-center'>
                            <h1 className='font-inter font-bold text-technology pt-30% text-center'>React</h1>
                          </div>
                        </div>

                        <div className=' bg-red-200 w-100% h-150% rounded-3xl'>
                          <div className='justify-center items-center'>
                            <h1 className='font-inter font-bold text-technology pt-30% text-center'>Spring</h1>
                          </div>
                        </div>

                        <div className=' bg-red-200 w-100% h-150% rounded-3xl'>
                          <div className='justify-center items-center'>
                            <h1 className='font-inter font-bold text-technology pt-30% text-center'>Java</h1>
                          </div>
                        </div>

                        <div className=' bg-red-200 w-100% h-150% rounded-3xl'>
                          <div className='justify-center items-center'>
                            <h1 className='font-inter font-bold text-technology pt-30% text-center'>JS</h1>
                          </div>
                        </div>

                        <div className=' bg-red-200 w-100% h-150% rounded-3xl'>
                          <div className='justify-center items-center'>
                            <h1 className='font-inter font-bold text-technology pt-30% text-center'>MySQL</h1>
                          </div>
                        </div>

                    </div>
                </div>
              </div>

        </Carousel>

        </div>

        <div className='mt-10% bg-red-700 p-2% w-100%'>
            <div className='flex justify-center'>

                <a href="https://github.com/TanzerDx" className='rounded-3xl h-40% w-3% ml-1% mr-1%'>
                  <img src={GithubLogo} alt="GithubLogo" />
                </a>

                <a href="https://www.linkedin.com/in/hristo-ganchev-15b3b724b/"  className='rounded-3xl h-40% w-3% ml-1% mr-1%'>
                  <img src={LinkedInLogo} alt="LinkedInLogo" />
                </a>

                <a href="mailto:hristo_ganchev3@gmail.com" className='rounded-3xl h-40% w-3% ml-1% mr-1%'>
                  <img src={MailLogo} alt="MailLogo" />
                </a>

            </div>
        </div>

    </>
  );
}

export default App;