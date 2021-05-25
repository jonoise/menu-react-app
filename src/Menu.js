import React from "react";
import Categories from "./Categories";

const Menu = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return <Categories key={item.id} item={item} />;
      })}
    </>
  );
};

export default Menu;
