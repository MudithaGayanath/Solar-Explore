import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import MainHeading from "../../Components/Headings/MainHeading";
import AboutComponent from "../../Components/About Component/AboutComponent";
import Footer from "../../Components/Footer/Footer";
import { useInView } from 'react-intersection-observer';
function About() {
  document.title = "About"
    const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.9, 
          });
  const s1 = [
    {
      text: "About Solar Explore",
      para: "Welcome to Solar Explore, your ultimate guide to unraveling the mysteries of the solar system! Our mission is to educate, inspire, and spark curiosity about the celestial wonders that make up our cosmic neighborhood.",
    },
    {
      text: "Who We Are",
      para: "We are a passionate team of astronomy enthusiasts, educators, and technologists dedicated to bringing the marvels of the solar system closer to everyone. From the blazing sun at the center to the icy comets on the fringes, we aim to provide an immersive learning experience for all ages.",
    },
  ];
  const s2 = [
    {
      text: "Why Explore the Solar System?",
      para: "The solar system is not just a collection of planets and stars; it’s a gateway to understanding the origins of life, the potential for extraterrestrial habitats, and humanity’s place in the universe. By exploring these celestial wonders, we can uncover answers to some of the biggest questions about existence.",
    },
    {
      text: "Our Vision",
      para: "We aim to create a world where everyone has access to the beauty and knowledge of space exploration. By blending education with technology, Solar Explore strives to make the wonders of the solar system accessible and engaging for all.",
    },
  ];
  return (
    <div className=" text-white">
      <NavBar page={"About"} />
      <div className=" md:flex">
        {s1.map((item) => {
          return <AboutComponent text={item.text} para={item.para} />;
        })}
      </div>
      <div ref={ref} className={` text-center justify-center transition-all duration-1000 ease-out 
     ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} `} >
        <MainHeading text={"What We Offer"} />
        <p className=" text-lg">At Solar Explore, you can:</p>
        <div className="flex  justify-center text-lg">
          <ul className=" text-start list-disc  flex flex-col p-10 justify-center">
            <li>
              Discover detailed information about planets, moons, asteroids, and
              other celestial bodies.
            </li>
            <li>
              Explore interactive visualizations of the solar system's layout
              and movements.
            </li>
            <li>
              Learn about groundbreaking space missions and their contributions
              to our understanding of the universe.
            </li>
            <li>
              Engage with fun quizzes, simulations, and activities designed to
              deepen your knowledge.
            </li>
          </ul>
        </div>
      </div>
      <div className=" md:flex">
        {s2.map((item) => {
          return <AboutComponent text={item.text} para={item.para} />;
        })}
      </div>
      <div ref={ref} className={` text-center p-10 text-lg transition-all duration-1000 ease-out 
     ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} `}>
        <MainHeading text={"Join Us"} />
        <p>
          Embark on a journey through space and time with Solar Explore.
          Together, let’s unlock the secrets of the universe, one celestial body
          at a time!
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
