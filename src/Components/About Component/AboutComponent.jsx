import React from 'react'
import MainHeading from '../Headings/MainHeading'
import { useInView } from 'react-intersection-observer';

function AboutComponent({text,para}) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.9, 
      });
  return (
    <div ref={ref} className={`text-center w-full md:w-1/2 p-10 h-1/2 flex flex-col items-center justify-center transition-all duration-1000 ease-out 
     ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <MainHeading text={text}/>
        <p className=' text-justify text-lg'>{para}</p>
    </div>
  )
}

export default AboutComponent