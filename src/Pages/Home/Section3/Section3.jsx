import React from "react";
import SectionComopnent from "../../../Components/Section Components/SectionComopnent";
import video from "./solarSection.mp4";
function Section3() {
  const title = "The Present and Future of Our Solar System";
  const para =
    "The present solar system is a harmonious assembly of the Sun, eight planets, their moons, and countless smaller objects like asteroids and comets, all orbiting in relative stability. However, the Sun is gradually consuming its fuel and will eventually evolve into a red giant in about 5 billion years, engulfing nearby planets like Mercury and Venus. Over time, it will shed its outer layers, leaving behind a white dwarf. The solar system's future also holds the potential for changes from external events, such as asteroid impacts or nearby stellar interactions, which could reshape its structure. Humanity's exploration and colonization of other celestial bodies may play a role in its evolution, hinting at an intertwined destiny of life and cosmic change.";
  return (
    <div className=" w-full h-screen mt-16 md:mt-0 ">
      <SectionComopnent title={title} video={video} para={para} url={"https://newspaceeconomy.ca/2024/10/20/the-cosmic-journey-unraveling-our-solar-systems-past-present-and-future/"} />
    </div>
  );
}

export default Section3;
