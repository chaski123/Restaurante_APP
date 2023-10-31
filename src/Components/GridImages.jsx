import React from "react";
import hamburguesa from "../img/Hamburgesas.jpg";
import tragos from "../img/tragos.jpg";
import restaurante from "../img/restaurante.jpg";
import item9  from "../img/Item-9.jpeg"
import "animate.css" 

const GridImages = () => {
  return (
    <section className="images-grid animate__animated animate__bounceInUp animate__delay-1s">
      <div className="images-grid-header">
        <h2 className="images-grid-title">Mas <span>Sobre</span> Nosotros</h2>
      </div>
      <div className="grid-container">
        <article className="bar">
          <img  src={restaurante} alt="restaurante"/>
          <div>
              <h3 className="images-grid-text">Entre Amigos</h3>
              <p className="images-grid-text">Nuestros panes recién horneados y los ingredientes frescos y deliciosos se combinan para crear una explosión de sabores en cada bocado. Ya sea que prefieras una hamburguesa clásica, una opción vegetariana, o una creación gourmet única. Ven a disfrutar de una comida deliciosa y satisfactoria en un ambiente acogedor y relajado.  </p>
          </div>
        </article>
        <article className="grid-col">
          <img src={tragos} alt="Tragos"/>
          <div>
              <h4 className="images-grid-text"><span>Tragos</span> Exclusivos</h4>
              <p className="images-grid-text">Son cócteles populares en eventos y celebraciones, como la Sangría y el Ponche, que suelen prepararse en grandes cantidades.</p>
          </div>
        </article>
        <article className="grid-col">
          <img src={hamburguesa} alt="Tragos"/>
          <div>
              <h4 className="images-grid-text">Nuestras <span>Hamburgesas</span></h4>
              <p className="images-grid-text">En nuestro restaurante, las hamburguesas son mucho más que una simple comida; son una experiencia de sabor inigualable. Cada una de nuestras jugosas hamburguesas se prepara con carne de la más alta calidad y se cocina a la perfección. </p>
          </div>
        </article>
        <article className="grid-col">
          <img src={item9} alt="Tragos"/>
          <div>
              <h4 className="images-grid-text">Momentos <span>Dulces</span></h4>
              <p className="images-grid-text">Imagina un lugar donde las risas fluyen, las historias se entrelazan y las amistades se fortalecen con cada sorbo. En nuestro acogedor rincón, disfrutar un momento entre amigos tomando algo se convierte en una experiencia única.</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default GridImages;
