import React from "react";

function Section4() {
  const titles = [
    "Planet",
    "Distance from Sun (AU)",
    "Diameter (km)",
    "Day Length (Earth Hours)",
    "Year Length (Earth Days)",
    "Number of Moons",
  ];

  const trData = [
    {
      Planet: "Mercury",
      DistanceFromSunAU: 0.39,
      DiameterKm: 4880,
      DayLengthHours: 1408,
      YearLengthDays: 88,
      NumberOfMoons: 0,
    },
    {
      Planet: "Venus",
      DistanceFromSunAU: 0.72,
      DiameterKm: 12104,
      DayLengthHours: 5832,
      YearLengthDays: 225,
      NumberOfMoons: 0,
    },
    {
      Planet: "Earth",
      DistanceFromSunAU: 1.0,
      DiameterKm: 12742,
      DayLengthHours: 24,
      YearLengthDays: 365,
      NumberOfMoons: 1,
    },
    {
      Planet: "Mars",
      DistanceFromSunAU: 1.52,
      DiameterKm: 6779,
      DayLengthHours: 25,
      YearLengthDays: 687,
      NumberOfMoons: 2,
    },
    {
      Planet: "Jupiter",
      DistanceFromSunAU: 5.2,
      DiameterKm: 139820,
      DayLengthHours: 10,
      YearLengthDays: 4333,
      NumberOfMoons: 79,
    },
    {
      Planet: "Saturn",
      DistanceFromSunAU: 9.58,
      DiameterKm: 116460,
      DayLengthHours: 10.7,
      YearLengthDays: 10759,
      NumberOfMoons: 83,
    },
    {
      Planet: "Uranus",
      DistanceFromSunAU: 19.22,
      DiameterKm: 50724,
      DayLengthHours: 17,
      YearLengthDays: 30687,
      NumberOfMoons: 27,
    },
    {
      Planet: "Neptune",
      DistanceFromSunAU: 30.05,
      DiameterKm: 49244,
      DayLengthHours: 16,
      YearLengthDays: 60190,
      NumberOfMoons: 14,
    },
  ];

  return (
    <div className=" w-full h-screen relative  sm:top-10  flex justify-center items-center  ">
      <table border="1" className="border-solid border-2    w-full h-screen ">
        <thead>
          <tr className="border-solid border-2 text-center h-24 ">
            { titles.map((t)=>{
                return <th>{t}</th>
            })}
          </tr>
        </thead>
        <tbody>
            {trData.map((obj, index)=>{
                return ( 
                    <tr className={`text-center border-solid border-2 ${(index % 2 == 0)?"bg-gray-900":""}  `}>
                        <td>{obj.Planet}</td>
                        <td>{obj.DistanceFromSunAU}</td>
                        <td>{obj.DiameterKm}</td>
                        <td>{obj.DayLengthHours}</td>
                        <td>{obj.YearLengthDays}</td>
                        <td>{obj.NumberOfMoons}</td>
                    </tr>
                );
            })}
          
          
        </tbody>
      </table>
    </div>
  );
}

export default Section4;
