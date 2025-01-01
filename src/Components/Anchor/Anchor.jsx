import React from "react";

function Anchor({ text, url }) {
  return (
    <a
      href={url}
      target="_blank"
      className=" border-2  border-yellow-400 p-2 text-lg hover:bg-yellow-400 absolute hover:text-black hover:scale-110 hover:border-0 transition-all"
    >
      {text}
    </a>
  );
}

export default Anchor;
