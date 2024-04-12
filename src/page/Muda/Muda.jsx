import style from "./Muda.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Card from "../../components/Card/Card";
import video from "../../assets/Muda/video_muda_1.mp4"



function Muda() {
  const { ref: videoRef, inView: videoInView } = useInView();
  const { ref: productosRef, inView: productosInView } = useInView();

  useEffect(() => {
  }, [videoInView, productosInView]);

  return (
    <section className={style.muda_main}>
      <motion.div
        ref={videoRef}
        className={style.video_muda}
        initial={{ x: 0 }}
        animate={videoInView ? { x: "60%" } : { x: 0 }}
        transition={{ duration: 4, delay: 3 }}
      >
        <video src={video} autoPlay muted loop style={{width: "100%", height: "100%", objectFit: "cover"}}></video>
      </motion.div>
      <motion.div
        className={style.productos_muda}
        ref={productosRef}
        initial={{ x: "-100%" }}
        animate={productosInView ? { x: 0 } : { x: "-100%" }}
        transition={{ duration: 4, delay: 3 }}
      >
        <div className={style.logo}>

        </div>
        <Card productosRef={productosRef} productosInView={productosInView}/>
      </motion.div>
    </section>
  );
}

export default Muda;
