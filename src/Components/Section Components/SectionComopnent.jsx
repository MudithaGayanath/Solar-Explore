import React from "react";
import Video from "../Video/Video";
import Anchor from "../Anchor/Anchor";
import { useInView } from "react-intersection-observer";

function SectionComponent({ title, video, para, url }) {
  const anime = "transition-all duration-1000 ease-out transform";

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  return (
    <div className="md:flex transition-all m-5">
      <div className="justify-center items-center md:flex md:flex-col mb-12">
        {/* Title with scroll-triggered animation */}
        <h1
          ref={ref}
          className={`text-4xl text-center mb-5 text-yellow-400 ${anime} ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {title}
        </h1>

        {/* Paragraph with scroll-triggered animation */}
        <p
          className={`p-2 leading-relaxed text-lg ${anime} ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {para}
        </p>

        {/* Anchor link with scroll-triggered animation */}
        <div className="flex justify-center">
          <Anchor
            text={"Explore More"}
            url={url}
            className={`${anime} ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          />
        </div>
      </div>

      {/* Video component */}
      <Video video={video} />
    </div>
  );
}

export default SectionComponent;
