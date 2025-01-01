import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'
import Footer from '../../Components/Footer/Footer'

function Home() {
  document.title = "Home"
  return (
    <div className=' text-white font-poppins flex flex-col p-0'>
        <Section1/>
        <Section2/>
        <Section3/>
        <div className=" mt-40 md:mt-0 ps-3 pe-3">
        <Section4/>
        <div className=""></div>
      <Footer/>
        </div>
    </div>
  )
}

export default Home