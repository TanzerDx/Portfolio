import ReactLogo from '../assets/React.png'
import SpringLogo from '../assets/Spring.png'
import JavaLogo from '../assets/Java.png'
import JSLogo from '../assets/JavaScript.png'
import HTML5Logo from '../assets/HTML5.png'
import DockerLogo from '../assets/Docker.png'
import TailwindLogo from '../assets/Tailwind.png'
import CSLogo from '../assets/CS.png'
import CSSLogo from '../assets/CSS.png'
import TypeScriptLogo from '../assets/TypeScript.png'
import MySQLLogo from '../assets/MySQL.png'
import ASPNETLogo from '../assets/ASP.NET.png'

const Experience = () => {
return (
    <>
    <div className='flex font-inter flex-col justify-center items-center'>
    <div className='text-center'>
      <h1 className="text-heading(sm) text-textColor font-bold md:text-heading(md) xl:text-heading(xl)">
        Experience
      </h1>
    </div>

    <div className='text-center w-80%'>
        <h3 className="text-experience(sm) text-white md:text-experience(md) xl:text-experience(xl) font-bold">
        For my two-year software experience, these are 
          the main technologies I have worked with:
        </h3>
    </div>

    <div className='snap-always snap-center mt-3%'></div>

    <div className='grid grid-cols-2 gap-x-5% gap-y-10% pl-10% pr-10% pt-3% pb-10% md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
      
    <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300 group'>  
      <div className='p-5% w-60% h-100%  rounded-3xl'>
        <img className="pt-6%" src={ReactLogo} alt="ReactLogo" />
      </div>
      <div className='justify-center items-center'>
        <h1 className='font-inter font-bold text-technology mt-10% text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300'>React</h1>
      </div>
    </div>


    <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300 group'>  
      <div className='p-5%  w-60% h-100% rounded-3xl'>
        <img className="p-6%" src={SpringLogo} alt="SpringLogo" />
      </div>
      <div className='justify-center items-center'>
        <h1 className='font-inter font-bold text-technology mt-10% text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300'>Spring</h1>
      </div>
    </div>

    <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300 group'>  
      <div className='p-5%  w-60% h-100% rounded-3xl'>
        <img className="p-6%" src={JavaLogo} alt="JavaLogo" />
      </div>
      <div className='justify-center items-center'>
        <h1 className='font-inter font-bold text-technology mt-10% text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300'>Java</h1>
      </div>
    </div>

    <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300 group'>  
      <div className='p-5%  w-60% h-100% rounded-3xl'>
        <img className="p-6% rounded-2xl" src={JSLogo} alt="JavaScriptLogo" />
      </div>
      <div className='justify-center items-center'>
        <h1 className='font-inter font-bold text-technology mt-10% text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300'>JavaScript</h1>
      </div>
    </div>

    <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300 group'>   
      <div className='p-5%  w-60% h-100% rounded-3xl'>
        <img className="p-6%" src={HTML5Logo} alt="HTML5Logo" />
      </div>
      <div className='justify-center items-center'>
      <h1 className='font-inter font-bold text-technology mt-10% text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300'>HTML5</h1>
      </div>
    </div>

    <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300 group'>   
  <div className='p-5% w-60% h-100% rounded-3xl'>
    <img className="pl-6% pt-8%" src={DockerLogo} alt="DockerLogo" />
  </div>
  <div className='justify-center items-center relative'>
    <h1 className='font-inter font-bold text-technology mt-10% text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300'>Docker</h1>
  </div>
</div>

<div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300 group'>   
      <div className='p-5% w-60% h-100% rounded-3xl'>
        <img className="p-6%" src={TailwindLogo} alt="TailwindLogo" />
      </div>
      <div className='justify-center items-center'>
        <h1 className='font-inter font-bold text-technology mt-10% text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300'>Tailwind</h1>
      </div>
    </div>

    <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300 group'>  
      <div className='p-5% w-60% h-100% rounded-3xl'>
        <img className="p-6%" src={CSLogo} alt="CSLogo" />
      </div>
      <div className='justify-center items-center'>
        <h1 className='font-inter font-bold text-technology mt-10% text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300'>C#</h1>
      </div>
    </div>

    <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300 group'>     
      <div className='p-5% w-60% h-100% rounded-3xl'>
        <img className="p-6%" src={CSSLogo} alt="CSSLogo" />
      </div>
      <div className='justify-center items-center'>
        <h1 className='font-inter font-bold text-technology mt-10% text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300'>CSS</h1>
      </div>
    </div>

    <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300 group'>  
      <div className='p-5% w-60% h-100% rounded-3xl'>
        <img className="p-6%" src={TypeScriptLogo} alt="TypeScriptLogo" />
      </div>
      <div className='justify-center items-center'>
        <h1 className='font-inter font-bold text-technology mt-10% text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300'>TypeScript</h1>
      </div>
    </div>

    <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300 group'>  
      <div className='p-5% w-60% h-100% rounded-3xl'>
        <img className="p-6%" src={MySQLLogo} alt="MySQLLogo" />
      </div>
      <div className='justify-center items-center'>
        <h1 className='font-inter font-bold text-technology mt-10% text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300'>MySQL</h1>
      </div>
    </div>

    <div className='text-black flex flex-col justify-center items-center hover:-translate-y-6 duration-300 group'>  
      <div className='p-5% w-60% h-100% rounded-3xl'>
        <img className="p-6%" src={ASPNETLogo} alt="ASP.NETLogo" />
      </div>
      <div className='justify-center items-center'>
        <h1 className='font-inter font-bold text-technology mt-10% text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300'>ASP.NET</h1>
      </div>
    </div>

    </div>

  </div>
  </>
)

}

export default Experience;