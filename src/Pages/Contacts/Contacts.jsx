import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import InputGroup from "../../Components/Input Group/InputGroup";
import MainHeading from "../../Components/Headings/MainHeading";
import TextAreaGroup from "../../Components/Input Group/TextAreaGroup";
import Button from "../../Components/Button/Button";
import Footer from "./../../Components/Footer/Footer.jsx";
import MsgHistory from "../../Components/Msg History/MsgHistory.jsx";
import SubHeading from "../../Components/Headings/SubHeading.jsx";
import { useInView } from "react-intersection-observer";
function Contacts() {
  document.title = " Contact"
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  function send() {
    document.getElementById("loaderContainer").classList.toggle("hidden");
    if (document.getElementById("email").value == "") {
      alert("Enter Email Address");
    } else if (document.getElementById("msg").value == "") {
      alert("Enter Message");
    } else {
      const dateTime = new Date();

      let msgObj = {
        email: document.getElementById("email").value,
        msg: document.getElementById("msg").value,
        date:
          dateTime.toLocaleDateString() + "-" + dateTime.toLocaleTimeString(),
      };
      localStorage.setItem(msgObj.date, JSON.stringify(msgObj));
    }
    clear();
    document.getElementById("loaderContainer").classList.toggle("hidden");
  }

  function clear() {
    document.getElementById("email").value = " ";
    document.getElementById("msg").value = "";
  }
  return (
    <div className=" text-white">
      <NavBar page={"Contact"} />
      <div ref={ref} className={`text-center transition-all duration-1000 ease-out 
     ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <MainHeading text={"Contact Us"} />
      </div>
      <div ref={ref} className={`w-full h-1/2  flex flex-col items-center transition-all duration-1000 ease-out 
     ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} `}>
        <InputGroup type={"email"} id={"email"} text={"Email Address"} />
        <TextAreaGroup text={"Message"} id={"msg"} />
        <div className="  w-3/5 md:w-1/4">
          <Button text={"Send"} func={send} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
