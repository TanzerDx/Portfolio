import CodeExampleTicketpass from '../../assets/ticketpass/CodeExampleTicketpass.png'
import VideoExampleTicketpass from '../../assets/ticketpass/TicketpassVideo.mp4'
import TicketpassPic from '../../assets/ticketpass/Screenshot_61.png'
import Popup from 'reactjs-popup';

const Ticketpass = () => {
    return (
                <div className="snap-always snap-end">
                  <div key="1" className='bg-secondaryColor mb-5% pb-5% w-80% h-50% justify-center rounded-3xl'>
                        
                        <Popup trigger={<img className=" w-100% h-100% rounded-3xl" src={TicketpassPic} alt="Ticketpass" />} position="center">  
                                    <div>
                                
                                    <div className='text-center mb-5%'>
                                      <h1 className="text-projectHeadingInPopup(sm) text-secondaryColor font-bold md:text-projectHeadingInPopup(md) xl:text-projectHeadingInPopup(xl)">
                                        Ticketpass
                                      </h1>
                                  </div>
                            
                                      <div className="xl:text-projectDescHeading(xl)">Introduction</div>
                                          
                                          <div className='xl:text-projectDesc(xl) mt-1% mb-1%'>
                                            Ticketpass is a platform for purchasing concert tickets. It was used as my 3rd semester university project. Due to this reason, real ticket purchases cannot be instantiated.
                                          </div>
                                          <div className='xl:text-projectDesc(xl) mt-1% mb-1%'>
                                            The main goal of Ticketpass is to create a user-friendly website where concert lovers can purchase tickets to many events and have all of them in one place. This gets rid of the burden of having the need to purchase tickets for separate events from different venue websites, the need of creating numerous accounts in each of them, and most likely forget your log in information later on.
                                          </div>
                                          <div className='xl:text-projectDesc(xl) mt-1% mb-1%'>
                                            Ticketpass was made as user-friendly as possible, while keeping the main functionality in order. Upon creating a registration, the user immediately has access to purchasing concert tickets, display the e-tickets on their devices, and has history of past concerts they have attended. There are also administrator and manager accounts on the platform that can add and update concerts, as well as terminate users that might do "sketchy" activities on the platform.
                                          </div>
                            
                            
                                          <div className="xl:text-projectDescHeading(xl) mt-7%">Front End</div>
                            
                                          <div className='xl:text-projectDesc(xl) mt-1% mb-1%'>
                                            The project was developed using React + Vite framework, together with JavaScript, HTML and pure CSS. Animations were involved in the All Concerts, Log In/Register, and My Tickets page. Websockets are also implemented, so that in case of an update of a concert, ticket holders for this specific event will be notified about the update. A full walkthrough of the project is available in the video below, where the process of purchasing four concert tickets is demonstrated.
                                          </div>
                            
                                          <video className="mt-5% mb-5% border-2 border-black"controls >
                                            <source src={VideoExampleTicketpass} type="video/mp4"/>
                                          </video>
                            
                                          <div className='xl:text-projectDesc(xl) mt-1% mb-1%'>
                                          You can find the full front end source code <a href="https://github.com/TanzerDx/Ticketpass-Frontend" className='text-red-700 underline'>here</a>.
                                          </div>
                            
                            
                            
                                          <div className="xl:text-projectDescHeading(xl) mt-7%">Back End + Database</div>
                            
                                          <div className='xl:text-projectDesc(xl) mt-1% mb-1%'>
                                            The back end part of the application was developed by using Spring Boot , a Java-based Framework. As for the database, MySQL was used. In order to speed up the development process, libraries like Lombok and JpaRepository were used.
                                          </div>
                            
                                          <div className='xl:text-projectDesc(xl) mt-1% mb-1%'>
                                            The back end consists of three layers: Controller layer, which is responsible for handling HTTP requests, Business Logic layer, which handles the algorithms and other application-related processes, and a Database layer, which manages the storage and retrieval of information from the database. 
                                          </div>
                            
                                          <div className='xl:text-projectDesc(xl) mt-1% mb-1%'>
                                            Based on the OWASP 10 Security Risks of 2021,  security has been devised in the application in order to keep the product as safe as possible. The use of parameterized queries, access tokens, encoding and decoding of passwords, and different role and ID checks are integrated throughout all three layers of the application. Sensitive information, such as the JWT Secret Key, is stored in an .env file, which is not present in the repository. 
                                          </div>
                            
                                          <div className='mb-5% mt-5% w-95%'>
                                            <img className="ml-3%" src={CodeExampleTicketpass } alt="Code Example Ticketpass" />
                                          </div>
                            
                                          <div className='xl:text-projectDesc(xl) mt-1% mb-1%'>
                                            You can find the full back end source code <a href="https://github.com/TanzerDx/Ticketpass-Backend" className='text-secondaryColor underline'>here</a>.
                                          </div>
                            
                            
                            
                                          <div className="xl:text-projectDescHeading(xl) mt-7%">Self Development</div>
                                          
                                          <div className='xl:text-projectDesc(xl) mt-1% mb-1%'>
                                            Overall,  all testers, observers, and teachers were very satisfied with the final product. This full-stack project made me learn how to design a user-friendly, well-designed, and secure application. I learned how to work with Java, JavaScript, React + Spring Boot and their variety of libraries, as well as noting a significant improvement in my CSS skills. 
                                          </div>
                                    </div>
                        </Popup>
                      
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
    )
}

export default Ticketpass;