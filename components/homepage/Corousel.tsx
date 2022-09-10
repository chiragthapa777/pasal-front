import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Crousel() {
  return (
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full">
      <img src="https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg?cs=srgb&dl=pexels-min-an-1087727.jpg&fm=jpg" className="w-full h-[50vh]" />
      <button className="btn">button</button>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
      <img src="https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg?cs=srgb&dl=pexels-min-an-1087727.jpg&fm=jpg" className="w-full h-[50vh]" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
      <img src="https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg?cs=srgb&dl=pexels-min-an-1087727.jpg&fm=jpg" className="w-full h-[50vh]" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide4" className="carousel-item relative w-full">
      <img src="https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg?cs=srgb&dl=pexels-min-an-1087727.jpg&fm=jpg" className="w-full h-[50vh]" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
  );
}
