import React, { useEffect, useState } from 'react'
import breard from "../../img/beard.jpeg"
import { FaCircle } from "react-icons/fa6";
import { carouse2 } from '../../../Components/carouselimgs';


function BeardImgSection(props) {
  const [acttiveImg, setActiveImg] = useState(1);

  const handleNext = () => {
    setActiveImg((acttiveImg + 1) % carouse2.length);
  };
  const handlePrev = () => {
    if (acttiveImg <= 0) {
      setActiveImg(carouse2.length - 1);
    } else {
      setActiveImg(acttiveImg - 1);
    }
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      handleNext();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [acttiveImg]);

  return (
   
     <div className="w-full lg:w-1/3 mt-10 flex flex-col justify-center items-center py-10">
           {carouse2.map((item, i) => {
            return (
              <img
                className={` ${
                  acttiveImg === i ? "block" : "hidden"
                } w-4/5 h-96 rounded-3xl transition-opacity duration-300 `}
                src={item.url}
                alt={item.alt}
                key={item.id}
              />
            );
          })}
         
         
          {/*<img className="w-4/5 rounded-3xl" src={breard} alt="img1" />*/}

          <div className="m-6 space-x-10 flex">
            <button>
              <FaCircle 
              onClick={handlePrev}
              className={`${
                acttiveImg === 0 ? "opacity-100" : "opacity-40"
              }
              active:opacity-100 transition-opacity duration-300 xl:w-6 xl:h-6 lg:w-7 lg:h-7 md:w-6 md:h-6`} />
            </button>
            <button>
              <FaCircle 
              className={`${
                acttiveImg === 1 ? "opacity-100" : "opacity-40"
              }
              cursor-none xl:w-6 xl:h-6 lg:w-7 lg:h-7 md:w-6 md:h-6`}/>
            </button>
            <button>
              <FaCircle
              onClick={handleNext}
              className={`${
                acttiveImg === 2 ? "opacity-100" : "opacity-40"
              }
              active:opacity-100 transition-opacity duration-300 xl:w-6 xl:h-6 lg:w-7 lg:h-7 md:w-6 md:h-6`} />
            </button>
          </div>{props.children}
        </div>
    
  )
}

export default BeardImgSection