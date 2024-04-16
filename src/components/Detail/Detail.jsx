import style from "./Detail.module.css";
import { FaChevronLeft, FaChevronRight   } from "react-icons/fa";


function Detail() {
  return (
    <section className={style.detail_main}>
      <div className={style.pagination_card}>
        <FaChevronLeft />
      </div>
      <div className={style.description_card}>
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
      <div className={style.pagination_card}>
        <FaChevronRight />
      </div>
    </section>
  );
}

export default Detail;
