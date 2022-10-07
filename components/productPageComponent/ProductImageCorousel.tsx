import React from "react";

function ProductImageCorousel(props: any) {
  const { imagesList } = props;
  return (
    <div className="carousel w-full h-[400px] ">
      {imagesList.length > 0 ? (
        imagesList.map((image: any, index: number) => {
            console.log(`#${index === imagesList.length - 1 ? 0 : index + 1}`)
            return(
          <div id={`slide${index}`} className="carousel-item relative w-full" key={image.id} >
            <img src={image.url} className="w-full object-scale-down" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${index === 0 ? imagesList.length - 1 : index - 1}`}
                className="btn btn-ghost btn-circle text-white"
              >
                ❮
              </a>
              <a
                href={`#slide${index === imagesList.length - 1 ? 0 : index + 1}`}
                className="btn btn-ghost btn-circle text-white"
              >
                ❯
              </a>
            </div>
          </div>
        )})
      ) : (
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-ghost btn-circle text-white">
              ❮
            </a>
            <a href="#slide1" className="btn btn-ghost btn-circle text-white">
              ❯
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductImageCorousel;
