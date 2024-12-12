import { Carousel } from 'react-responsive-carousel';

import Ticketpass from "../components/projects/ticketpass.jsx"

const MyWork = () => {
return (
     <>
     <div className='text-center'>
              <h1 className="text-heading(sm) text-red-700 font-bold md:text-heading(md) xl:text-heading(xl)">
                My work
              </h1>
            </div>
    
            <Carousel className="w-60% ml-11.5%">       
                <Ticketpass/>
            </Carousel>
            </>
)
}

export default MyWork;