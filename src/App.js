import React, { useState } from "react";
import Menu from "./Menu";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterCategories = (e) => {
    const filteredItems = items.filter(
      (item) => e.target.name === item.category
    );
    setMenuItems(filteredItems);
  };

  const allItems = () => {
    setMenuItems(items);
  };
  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Menu</h2>
            <div className="underline"></div>
          </div>
          <div className="btn-container">
            <button onClick={allItems} name="all" className="filter-btn">
              All
            </button>
            <button
              onClick={filterCategories}
              name="breakfast"
              className="filter-btn"
            >
              Breakfast
            </button>
            <button
              onClick={filterCategories}
              name="lunch"
              className="filter-btn"
            >
              Lunch
            </button>
            <button
              onClick={filterCategories}
              name="shakes"
              className="filter-btn"
            >
              shakes
            </button>
          </div>
          <div className="section-center">
            <Menu items={menuItems} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
