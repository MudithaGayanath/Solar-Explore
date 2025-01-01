import React from 'react'

function Video({video}) {
  return (
    <video src={video} className=' sm:w-full md:w-1/2 md:h-screen' loop autoPlay muted></video>
  )
}

export default Video