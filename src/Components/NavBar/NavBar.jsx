import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar({page}) {
  const [open, setOpen] = useState(false);

  const linkNames = [
    { name: "Home", url: "/" },
    { name: "Planets", url: "/planets" },
    {name: "About", url: "/about" },{name: "Contact", url: "/contact" }
  ];

  function toggleMenu() {
    setOpen(!open); 
  }

  return (
    <div className="bg-transparent relative  w-full sm:h-16 md:flex md:justify-around p-5  z-100 text-white ">
      <h1 className="uppercase font-poppins text-2xl hover:text-yellow-400"><Link to={"/"}>Solar Explore</Link></h1>


      <div className="absolute top-5 right-5 md:hidden">
        
        {open && (
          <img
            className="flex cursor-pointer"
            onClick={toggleMenu}
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/FFFFFF/delete-sign--v1.png"
            alt="Close Menu"
          />
        )}
        {!open && (
          <img
            className="flex cursor-pointer"
            onClick={toggleMenu}
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/FFFFFF/menu.png"
            alt="Open Menu"
          />
        )}
      </div>

      <ul
        className={`md:flex ${
          open ? "block" : "hidden"
        } md:block mt-5 md:mt-0 space-y-2 md:space-y-0 `}
      >
        {linkNames.map((item, index) => (
          <li key={index} className={`md:me-10  ${(page == item.name)?"text-yellow-400 underline underline-offset-4":""} `}>
            <Link to={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
