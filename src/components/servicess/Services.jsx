import { services2 } from "../../assets";
import "./Services.css";

import { motion } from "framer-motion";
import { fadeIn } from "../../utility/motion";

const Services = () => {
  return (
    <div className="services_section" id="services">
      <h1>Services</h1>
      <div className="services_grid">
        <div className="services_box">
          <img src={services2} alt="service1" className="service_img" />
        </div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="services_content"
        >
          <h2>What Services Do We Provide?</h2>
          <ul>
            <li>Funeral cover</li>
            <li>Samketi Catering</li>
            <li>Samketi Corporate</li>
            <li>SADC Burial and Repatriation Cover</li>
            <li>Coffins</li>
          </ul>
          <h2>Top-Ups</h2>
          <ul>
            <li>Catering</li>
            <li>Tombstones</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
