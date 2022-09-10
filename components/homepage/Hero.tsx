import React from "react";

export default function Hero() {
  return (
    <>
      <div className="hero min-h-[70vh] bg-base-200 md:px-20 text-sm md:text-md">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/heroimage1.jpg"
            className="sm:max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">Large Store, Take A Seat</h1>
            <p className="py-6 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary px-20 w-full md:w-auto text-white">Start shopping</button>
          </div>
        </div>
      </div>
    </>
  );
}
