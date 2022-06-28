import './NavBar.css';
import React, { useEffect, useState } from "react";

export default function NavBar() {

    const [show, handleShow] = useState();
    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow (false);
        } );
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);
  return <div>
      <div className={`nav ${show && "nav__black"}`}>
          <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            alt='Netflix Logo'></img>
      </div>
  </div>;
}
