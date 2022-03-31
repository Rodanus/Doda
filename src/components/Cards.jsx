import React from "react";
import Card from "./Card";

function Cards({ products }) {
  return (
    <div>
      {products.map(item => (
        <div>
          <Card item={item} />
        </div>
      ))}
    </div>
  );
}

export default Cards;
