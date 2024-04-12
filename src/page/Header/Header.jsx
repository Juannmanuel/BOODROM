import style from "./Header.module.css";
import image from "../../assets/imagenes/winter.jpeg";

function Header() {
  return (
    <section className={style.header_main}>
      <div className={style.intro_estacion}>
      </div>
      <div className={style.intro_logo}>
      </div>
      <div className={style.intro_descuento}>
      </div>
    </section>
  );
}

export default Header;
