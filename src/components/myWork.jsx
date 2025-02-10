import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Ticketpass from "../components/projects/ticketpass.jsx";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MyWork = () => {
  const CarouselArrow = ({ onClick, direction }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300 ${
        direction === "prev" ? "left-4" : "right-4"
      }`}
    >
      {direction === "prev" ? (
        <FaArrowLeft className="w-6 h-6" />
      ) : (
        <FaArrowRight className="w-6 h-6" />
      )}
    </button>
  );

  return (
    <>
      <div className="h-screen snap-always snap-center flex flex-col justify-center items-center">
        <div className="text-center mb-6">
          <h1 className="text-heading(sm) text-textColor font-bold md:text-heading(md) xl:text-heading(xl)">
            My work
          </h1>
        </div>

        <div className="w-full max-w-4xl mx-auto px-4">
          <Carousel
            showArrows={true}
            showStatus={false}
            infiniteLoop={true}
            className="w-full"
            renderArrowPrev={(onClickHandler) => (
              <CarouselArrow onClick={onClickHandler} direction="prev" />
            )}
            renderArrowNext={(onClickHandler) => (
              <CarouselArrow onClick={onClickHandler} direction="next" />
            )}
          >
            <div className="flex justify-center items-center">
              <Ticketpass />
            </div>
            <div className="flex justify-center items-center">
              <Ticketpass />
            </div>
            <div className="flex justify-center items-center">
              <Ticketpass />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default MyWork;
