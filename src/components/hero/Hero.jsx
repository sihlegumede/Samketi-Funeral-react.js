import { casket1 } from "../../assets";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero_section" id="home">
      <div className="overlay"></div>
      <video src={casket1} autoPlay loop muted className="hero_video" />
      <div className="hero_content">
        <h1>Welcome to Samketi</h1>
        <br />
        <p>
          A sanctuary where the spirit of life reigns, and the soul is
          preserved.
          <br />
          <br />
          Samketi Funerals is a lifestyle brand that provides services,
          solutions and benefits that their clients enjoy for a full life cycle;
          while alive, at passing and after life.
        </p>
      </div>
    </div>
  );
};

export default Hero;
