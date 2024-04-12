import style from "./Card.module.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import image1 from "../../assets/Muda/imagen_muda_1_1.jpg";
import image2 from "../../assets/Muda/imagen_muda_1_2.jpg";
import image3 from "../../assets/Muda/imagen_muda_1_3.jpg";
import image4 from "../../assets/Muda/imagen_muda_1_4.jpg";
import image5 from "../../assets/Muda/imagen_muda_1_5.jpg";

function Card({ productosRef, productosInView }) {
  return (
    <motion.div
      className={style.card_main}
      ref={productosRef}
      initial={{ opacity: 0 }}
      animate={productosInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ ease: "easeOut", duration: 2, delay: 5 }}
    >
      <div className={style.card_image}>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={style.swiper}
        >
          <SwiperSlide>
            <img src={image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image5} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={style.card_description}>
        <div className={style.item}>
          <span>THE ORIGINAL BUTTON FLY</span>
        </div>
        <div className={style.item}>
          <span>$ 119.000</span>
        </div>
        <div className={style.item}>
          <span>3 cuotas sin interés de $ 39.666,66</span>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
