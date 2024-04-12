import { useState } from "react";
import "./App.css";
import Header from "./page/Header/Header";
import Muda from "./page/Muda/Muda";
import Intervalo from "./page/Intervalo/Intervalo";
function App() {
  return (
    <section className="app_main">
      <section className="item">
        <Header />
      </section>
      <section className="item">
        <Muda />
      </section>
      <section className="item">
        <Intervalo />
      </section>
      <section className="item">
        <Muda />
      </section>
      <section className="item">
        <Intervalo />
      </section>
      <section className="item">
        <Muda />
      </section>
      <section className="item">
        <Intervalo />
      </section>
      <section className="item">
        <Muda />
      </section>
      <section className="item_footer">
        <h2>footer</h2>
      </section>
    </section>
  );
}

export default App;
