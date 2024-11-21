import { useState } from "react";
import "./Navbar.css";

import { logo } from "../../assets";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar_section">
      <div className="navbar_logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="navbar_tabs">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar_menu">
        <button onClick={handleMenuToggle} className="navbar_menu_toggle">
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
        {menuOpen && (
          <ul className="navbar_menu_links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
