import React from "react";
import SectionComopnent from "../../../Components/Section Components/SectionComopnent";
import video from "./boom.mp4";
function Section2() {
  const title = "The Origins of Our Solar System";
  const para =
    "The solar system's past stretches back about 4.6 billion years, when it formed from a massive cloud of gas and dust called a solar nebula. Triggered by a nearby supernova, the nebula collapsed under gravity, creating a spinning disk. At its center, the Sun ignited as nuclear fusion began, while particles in the surrounding disk clumped together to form planets, moons, asteroids, and other celestial bodies. Early collisions and intense solar winds shaped the system, with gas giants forming first and rocky planets, like Earth, developing later. Over billions of years, this chaotic environment settled into the balanced solar system we see today.";
  return (
    <div className=" w-full h-screen ">
      <SectionComopnent title={title} video={video} para={para} url={"https://www.thoughtco.com/the-origin-of-our-solar-system-3073437"} />
    </div>
  );
}

export default Section2;
