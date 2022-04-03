import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import tw, { styled } from "twin.macro";
import { addItemToOrderList, increaseQuantityBy } from "../store/orderList";
import { increasePriceBy } from "../store/totalOrderPrice";
import { ReactComponent as IncreaseIcon } from "../icons/increase-btn.svg";
import { ReactComponent as DecreaseIcon } from "../icons/descrease-btn.svg";

const ViewProductContainer = styled.main(() => [tw`container`]);

const ProductImage = styled.img(() => [tw`max-w-full w-[400px] mr-8`]);

const ProductTitleAndPrice = styled.div(() => [tw`flex justify-between mb-14`]);

const ProductTitle = styled.h1(() => [tw`text-4xl`]);

const ProductPrice = styled.span(() => [tw`text-4xl`]);

const ProductMoreInfo = styled.div(() => [tw`flex p-8 rounded-xl bg-white`]);

const ProductDescAndQuantity = styled.div(() => [tw``]);

const ProductDesc = styled.p(() => [tw`max-w-[500px] mb-12`]);

const OrderQuantity = styled.span(() => [tw`select-none mx-4`]);

const IncreaseQuantityIcon = styled(IncreaseIcon)(() => [
  tw`cursor-pointer w-[40px] select-none mr-4`
]);
const DecreaseQuantityIcon = styled(DecreaseIcon)(() => [
  tw`cursor-pointer w-[40px] select-none`
]);

const AddProductButton = styled.button(() => [
  tw`select-none bg-[#0097E0] hover:bg-[#007EBB] text-white py-3 px-10 rounded-2xl`
]);

function ViewProduct() {
  const { id } = useParams();

  const products = useSelector(s => s.products.products);

  const [currentProduct] = products.filter(product => product.id === +id);

  const { itemsOrdered } = useSelector(state => state.orderList);

  const [orderAmount, setOrderAmount] = useState(0);

  const dispatch = useDispatch();

  const handleIncreaseOrderQuantity = () => {
    setOrderAmount(preState => preState + 1);
  };

  const handleDecreaseOrderQuantity = () => {
    if (orderAmount > 0) {
      setOrderAmount(preState => preState - 1);
    }
  };

  const isProductOrdered = productId => {
    const orderedProduct = itemsOrdered.filter(
      product => product.id === productId
    );

    return orderedProduct.length > 0;
  };

  const handleItemOrdering = (
    productName,
    productCategory,
    productId,
    quantityToIncrease,
    productPrice
  ) => {
    const isProductOrderedBefore = isProductOrdered(productId);

    if (isProductOrderedBefore && quantityToIncrease > 0) {
      dispatch(increaseQuantityBy({ productId, quantityToIncrease }));
    } else if (quantityToIncrease > 0) {
      dispatch(
        addItemToOrderList({
          id: productId,
          category: productCategory,
          image: currentProduct.image,
          title: productName,
          price: productPrice,
          orderedQuantity: orderAmount
        })
      );
    }
    dispatch(increasePriceBy(currentProduct.price * quantityToIncrease));
    setOrderAmount(0);
  };

  return (
    <ViewProductContainer>
      <ProductTitleAndPrice>
        <ProductTitle>{currentProduct.title}</ProductTitle>
        <ProductPrice>${currentProduct.price}</ProductPrice>
      </ProductTitleAndPrice>
      <ProductMoreInfo>
        <ProductImage src={currentProduct.image} />

        <ProductDescAndQuantity>
          <ProductDesc>{currentProduct.description}</ProductDesc>

          <div className="flex justify-between items-center max-w-min">
            <DecreaseQuantityIcon
              onClick={() => handleDecreaseOrderQuantity()}
            />
            <OrderQuantity>{orderAmount}</OrderQuantity>
            <IncreaseQuantityIcon
              onClick={() => handleIncreaseOrderQuantity()}
            />
            <AddProductButton
              onClick={() =>
                handleItemOrdering(
                  currentProduct.title,
                  currentProduct.category,
                  currentProduct.id,
                  orderAmount,
                  currentProduct.price
                )
              }
            >
              Add
            </AddProductButton>
          </div>
        </ProductDescAndQuantity>
      </ProductMoreInfo>
    </ViewProductContainer>
  );
}

export default ViewProduct;
