import React, {useState} from "react";
import NavBarUser from "../Components/NavBarUser";
import Main from "../Components/Main";
import NavBarAdmin from "../Components/NavBarAdmin";
import Menu from "./Menu";
import Categories from "../Components/Categories";
import items from "../Components/data"
import logo from "../img/MenuLogo.png"


const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const HomePage = () => {
  const userAdmin = false

  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <>
      {userAdmin ? <NavBarAdmin/> : <NavBarUser/>}
      <Main/>
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo restaurante" className="logo"/>
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems}/>
      </section>
    </>
  );
};

export default HomePage;
