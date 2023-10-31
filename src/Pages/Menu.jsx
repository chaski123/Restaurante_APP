import React, { useState } from "react";
import items from "../data/data";
import logo from "../img/MenuLogo.png";
import Categories from "../Components/Categories";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const allCategories = ["Todo", ...new Set(items.map((item) => item.category))];

const Menu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "Todo") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  const userAdmin = true;
  return (
    <>
      <NavBar />
      {userAdmin === true ? (<section className="menu section">
        <div className="title">
          <img src={logo} alt="logo restaurante" className="logo" />
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <div className="section-center">
          {menuItems.map((item) => {
            // Cambie el'items' por 'menuItems'
            const { id, title, img, desc, price } = item;
            return (
              <article key={id} className="menu-item">
                <img src={img} alt={title} className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{title}</h4>
                    <h4 className="price">${price}</h4>
                  </header>
                  <p className="item-text">{desc}</p>
                    <div className="mt-3">
                      <button className="btn btn-warning me-2">
                        Editar
                      </button>
                      <button className="btn btn-danger">
                        Eliminar
                      </button>
                    </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>)
      :
      (<section className="menu section">
        <div className="title">
          <img src={logo} alt="logo restaurante" className="logo" />
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <div className="section-center">
          {menuItems.map((item) => {
            // Cambie el'items' por 'menuItems'
            const { id, title, img, desc, price } = item;
            return (
              <article key={id} className="menu-item">
                <img src={img} alt={title} className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{title}</h4>
                    <h4 className="price">${price}</h4>
                  </header>
                  <p className="item-text">{desc}</p>
                    <div className="mt-3">
                      <button className="btn btn-seuccess">
                        Agregar
                      </button>
                    </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>)}
      <Footer />
    </>
  );
};

export default Menu;
