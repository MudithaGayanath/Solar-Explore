import React from "react";
export default function PlanetComponents({ id, image, para1, para2 }) {
  return (
    <div id={id} className="pt-10 flex flex-col">
      <h1 className="text-4xl text-center mb-2 text-yellow-400">{id}</h1>
      <div className="flex flex-col md:flex-row w-full">
        <img
          src={image}
          alt={`${id} illustration`}
          className="w-full md:w-2/4 object-contain rounded-lg"
        />
        <div className="w-full md:w-2/4 flex items-center leading-relaxed text-lg text-justify p-5 md:p-0 md:pe-5 md:ps-5">
          {para1 || <p>No information available for this section.</p>}
        </div>
      </div>
      <div className="w-full leading-relaxed text-lg flex flex-col text-justify p-5">
        {para2 || <p>No additional details provided.</p>}
      </div>
    </div>
  );
}
