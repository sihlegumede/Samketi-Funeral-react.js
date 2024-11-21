// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./More.css";

import { Autoplay, EffectCube, Pagination } from "swiper/modules";
import {
  coverFlow1,
  coverFlow2,
  debtOrder,
  directDeposit,
  easyPay,
  instantEFT,
  masterCard,
  payPal,
  visa,
} from "../../assets";

import { motion } from "framer-motion";
import { fadeIn } from "../../utility/motion";

const More = () => {
  return (
    <div className="more_section">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="more_content"
      >
        <h1>Samketi Funeral Goes Cardless</h1>
        <p>
          You no longer have to stand in long queues at branches but can now pay
          for policy via <b>debit order, EFT, direct deposit, or Easypay</b> at
          the tills of participating retailers
        </p>
        <div className="more_content_ticker">
          {/* FIRST */}
          <div className="ticker">
            <img src={masterCard} className="ticker_img" />
          </div>
          <div className="ticker">
            <img src={payPal} className="ticker_img" />
          </div>
          <div className="ticker">
            <img src={visa} className="ticker_img" />
          </div>
          <div className="ticker">
            <img src={easyPay} className="ticker_img" />
          </div>
          <div className="ticker">
            <img src={directDeposit} className="ticker_img" />
          </div>
          <div className="ticker">
            <img src={instantEFT} className="ticker_img" />
          </div>
          <div className="ticker">
            <img src={debtOrder} className="ticker_img" />
          </div>
          {/* SECOND */}
          <div className="ticker">
            <img src={masterCard} className="ticker_img" />
          </div>
          <div className="ticker">
            <img src={payPal} className="ticker_img" />
          </div>
          <div className="ticker">
            <img src={visa} className="ticker_img" />
          </div>
          <div className="ticker">
            <img src={easyPay} className="ticker_img" />
          </div>
          <div className="ticker">
            <img src={directDeposit} className="ticker_img" />
          </div>
          <div className="ticker">
            <img src={instantEFT} className="ticker_img" />
          </div>
          <div className="ticker">
            <img src={debtOrder} className="ticker_img" />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="swiper_content"
      >
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Autoplay, EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={coverFlow1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={coverFlow2} />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
};

export default More;
