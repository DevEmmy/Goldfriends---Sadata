import Link from "next/link";
import React, { useState } from "react";
import { NavStyle } from "./Styled";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "./media/logo.png";

const Nav = ({ active = 0 }) => {
  const [services, setServices] = useState(false);
  const [navWidth, setNavWidth] = useState(true)
  const [right, setRight] = useState("none")

  const showWidth = ()=>{
    if(navWidth){
        setNavWidth(!navWidth);
        setRight("flex")
    }

    else if(!navWidth){
        setNavWidth(!navWidth)
        setRight("none")
    }
  }

  return (
    <NavStyle>
      <div className="logo">
        <Link href="/">
          <img src={logo.src} alt="" />
        </Link>
      </div>

      {/* <div className="center">
        <div className={active == 0 && "active"}>
          <Link href={"/"}>Home</Link>
        </div>

        <div className={active == 1 && "active"}>
          <Link href={"/about"}>About</Link>
        </div>


        <div className={active == 3 && "active"}>
          <Link href={"/contact"}>Contact Us</Link>
        </div>
      </div> */}

      <div className="end">
        <div className="signUp">
          <Link href={"/sign-in"}>Sign In</Link>
        </div>
      </div>

      <div className="hamburger">
        <div className="icon">
          <HiMenuAlt3 size={"30px"} onClick={showWidth}/>
        </div>

        <div className="items" style={{display: right}}>
            <div className="cancel">
                <HiX onClick={showWidth}/>
            </div>
          <div className={active == 0 && "active"}>
            <Link href={"/"}>Home</Link>
          </div>

          <div className={active == 1 && "active"}>
            <Link href={"/about"}>About</Link>
          </div>
          {/* <div className={active == 2 && "active"} id="services">
            <div
              onClick={() => {
                setServices(!services);
              }}
            >
              Our Services
            </div>

            {services && (
              <div className="navServices">
                <Link href="/services/ticket-booking">Ticket Booking</Link>
                <Link href={"/services/visa-processing"}>Visa Processing</Link>
                <Link href={"/services/real-estate"}>Real Estate</Link>
                <Link href="/">Minning</Link>
              </div>
            )}
          </div> */}

          <div className={active == 3 && "active"}>
            <Link href={"/contact"}>Contact Us</Link>
          </div>
        </div>
      </div>
    </NavStyle>
  );
};

export default Nav;
