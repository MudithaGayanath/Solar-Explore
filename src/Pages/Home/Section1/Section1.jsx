import React from "react";
import backgroundVideo from "./back.mp4";
import NavBar from "../../../Components/NavBar/NavBar";
import { useInView } from 'react-intersection-observer';

function Section1() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9, 
  });
  return (
    <div className="relative w-full h-screen">
      <NavBar page={"Home"}/>
      {/* Background Video */}
      <video
        className="w-full h-full object-cover absolute top-0 left-0 z-[-1]"
        src={backgroundVideo}
        loop
        muted
        autoPlay
        ></video>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 z-[-1]">
        <h1 ref={ref} className={`text-center text-6xl text-white transition-all duration-1000 ease-out transform    ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } }`}>
          Explore The Wonder Of Solar System
        </h1>
         
      </div>
    </div>
  );
}

export default Section1;
