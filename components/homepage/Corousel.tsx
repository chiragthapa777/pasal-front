import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Crousel() {
  return (
      <div className="corousel">
          <div className={'h-28 sm:h-36 md:h-40 flex flex-row justify-between  items-center w-full '}>
                <div className={'w-full ml-5 sm:ml-32 text-md sm:text-xl md:text-3xl lg:text-4xl'}>
                    <h1 className={'font-extrabold text-primary'}>LARGE STORE, TAKE A SEAT</h1>
                    <h2 className={"text-sm sm:text-md md:text-2xl lg:text2xl"}>DISCOVER SOMETHING NEW EVERYTIME</h2>
                </div>
                <img src="/undraw_shopping_app_flsj.svg" alt="" srcSet="" className={"m-0 h-20 sm:h-28 md:h-32 w-auto my-auto"} />
          </div>
        {/*<img src="https://booksmandala.com/images/banner/new-arrivals-desktop.jpg" alt="" srcSet="" className={"m-0"} />*/}
        <Carousel autoPlay  infiniteLoop transitionTime={100} useKeyboardArrows  showThumbs={false} showStatus={false}  emulateTouch stopOnHover>
          <div>
            <img className="cImg opacity-90" src="https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193_960_720.jpg" />
              {/*<div className={'absolute z-50 top-[50%] right-[50%] translate-y-[-50%] translate-y-[-50%]'}>*/}
              {/*    <button className="btn">Shop now</button>*/}
              {/*</div>*/}
          </div>
          <div>
            <img className="cImg opacity-90" src="https://cdn.pixabay.com/photo/2015/01/15/12/46/woman-600225_960_720.jpg" />
          </div>
          <div>
            <img className="cImg opacity-90" src="https://cdn.pixabay.com/photo/2020/07/11/16/16/jeans-5394561_960_720.jpg"  />
          </div>
        </Carousel>
      </div>
  );
}
