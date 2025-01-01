import React from 'react'
import image from "./sola main.png"
import backgroundVideo from "./back.mp4";
import NavBar from "../../../Components/NavBar/NavBar";
import { useInView } from 'react-intersection-observer';

function Section1() {
  const planets = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"]
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9, 
  });
  return (
    
    <div className=" w-full h-screen">
      <NavBar page={"Planets"}/>
      <video
        className="w-full h-full object-cover absolute top-0 left-0 z-[-1]"
        src={backgroundVideo}
        loop
        muted
        autoPlay
        ></video>
      <div className="  absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20 z-[-1]">
        <h1 ref={ref} className={`text-center text-6xl text-white transition-all duration-1000 ease-out transform    ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } }`}>
          Explore The Wonder Of Planets
        </h1>
        
      </div>
      <div className=" w-full h-10  top-[100vh] absolute    flex justify-center items-center ">
        <ul className=' flex justify-around w-full'>
          {
            planets.map((p)=>{
              return ( <li><a href={`#${p}`} className=' md:text-lg'>{p}</a></li>)
            })
          }
        </ul>
      </div>
    </div>
    
  );
}

export default Section1