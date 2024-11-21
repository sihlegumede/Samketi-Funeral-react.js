import { aboutContent } from "../../constants";
import "./AboutUs.css";

import { motion } from "framer-motion";
import { fadeIn } from "../../utility/motion";
const AboutUs = () => {
  return (
    <div>
      <div className="aboutUs_container" id="about">
        <h1>About Us</h1>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="aboutUs_content"
        >
          {aboutContent.map((content) => (
            <div key={content.title} className="aboutUs_content_map">
              <img src={content.image} alt="image" className="content_image" />
              <h2>{content.title}</h2>
              <p>{content.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
