import React from "react";
import Card from "./Card";

function Cards({ foodMenu }) {
  return (
    <div>
      {foodMenu.map(category => (
        <div>
          {category.items.map(item => (
            <Card item={item} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Cards;
