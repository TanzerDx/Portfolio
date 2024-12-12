import Picture from '../assets/Me.png'

const AboutMe = () => {

return (
     <div>
           
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
                    I can work both independently and in a team setting. If you are looking for a young professional, you are in the right place.
                  </h1>
                </div>
    
    
                <div className='w-40%'>
                  <img className="w-60% h-35% mt-13% mr-10% ml-23%" src={Picture} alt="Hristo's Picture" />
                </div>
    
              </div>
          </div>
)

}

export default AboutMe;