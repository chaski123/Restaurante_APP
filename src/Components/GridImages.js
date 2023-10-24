import React from "react";
import hamburguesa from "../img/Hamburgesas.jpg";
import tragos from "../img/tragos.jpg";
import restaurante from "../img/restaurante.jpg";
import item9  from "../img/Item-9.jpeg"

const GridImages = () => {
  return (
    <section className="images-grid animate__animated animate__bounceInUp animate__delay-2s">
      <div className="images-grid-header">
        <h2 className="images-grid-title">Mas Sobre Nosotros</h2>
      </div>
      <div className="grid-container">
        <article className="bar">
          <img src={restaurante} alt="restaurante"/>
          <div>
              <h3 className="images-grid-text">Restaurante</h3>
              <p className="images-grid-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
          </div>
        </article>
        <article className="grid-col">
          <img src={tragos} alt="Tragos"/>
          <div>
              <h4 className="images-grid-text">Nuestros Tragos</h4>
              <p className="images-grid-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
          </div>
        </article>
        <article className="grid-col">
          <img src={hamburguesa} alt="Tragos"/>
          <div>
              <h4 className="images-grid-text">Nuestras Hamburgesas</h4>
              <p className="images-grid-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
          </div>
        </article>
        <article className="grid-col">
          <img src={item9} alt="Tragos"/>
          <div>
              <h4 className="images-grid-text">Momentos Dulces</h4>
              <p className="images-grid-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default GridImages;
