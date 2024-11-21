import "./Footer.css";

import { logo } from "../../assets";

import { MdEmail } from "react-icons/md";

import { motion } from "framer-motion";
import { fadeIn } from "../../utility/motion";

const Footer = () => {
  return (
    <div className="footer_section" id="contact">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="footer_container"
      >
        <div className="footer_logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="footer_office_one">
          <h1>Office 1</h1>
          <ul>
            <li>
              <h3>Address: </h3>
              <p>
                Eksee Legacy Business House Numbi Road, <br /> Masoyi <br />{" "}
                1242
              </p>
            </li>
            <br />
            <li>
              <h3>Contact Us:</h3>
              <p>
                +27 72 367 6437 <br /> +27 74 772 3726
              </p>
            </li>
          </ul>
        </div>
        <div className="footer_office_two">
          <h1>Office 2</h1>
          <ul>
            <li>
              <h3>Address: </h3>
              <p>
                Bosduif Street Rabie Ridge, <br /> Midrand <br /> 1109
              </p>
            </li>
            <br />
            <li>
              <h3>Contact Us:</h3>
              <p>+27 73 011 8007</p>
            </li>
          </ul>
        </div>
        <div className="footer_email">
          <ul>
            <li>
              <MdEmail /> ekseefunerals@gmail.com
            </li>
          </ul>
        </div>
      </motion.div>
      <div className="footer_copyright">
        <hr />
        <p> &#169; 2024 Eksee Legacy. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
