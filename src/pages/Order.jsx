import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decreaseQuantity, increaseOrderQuantityBy } from "../store/foodMenu";

function Order() {
  const foodMenu = useSelector(store => store.foodMenu.foodMenu);
  const dispatch = useDispatch();
  console.log(foodMenu);
  return (
    <div>
      {foodMenu.map(category => (
        <div>
          {category.items.map(item => (
            <>
              <p>{item.name}</p>
              <p>{item.orderedQuantity}</p>
              <button
                onClick={() =>
                  dispatch(
                    increaseOrderQuantityBy({
                      foodCategory: "name",
                      foodName: "Falafel",
                      quantityToIncrease: 20
                    })
                  )
                }
              >
                Increase
              </button>

              <button
                onClick={() =>
                  dispatch(
                    decreaseQuantity({
                      foodCategory: "name",
                      foodName: "Falafel"
                    })
                  )
                }
              >
                decrease
              </button>
            </>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Order;
