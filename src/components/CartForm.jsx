import React, { useState } from "react";
import { useSelector } from "react-redux";
import tw, { styled } from "twin.macro";

const InputContainer = styled.div(() => [tw`flex flex-col mb-6`]);

const TextInputLabel = styled.label(() => [tw`text-3xl font-bold mb-4`]);

const TextInput = styled.input(() => [tw`max-w-[300px] h-[35px] p-4`]);

function CartForm() {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const { itemsOrdered } = useSelector(s => s.orderList);

  const [showOrderSentMessage, setShowOrderSentMessage] = useState(false);

  const [showCartIsEmptyMessage, setShowCartIsEmptyMessage] = useState(false);

  const onCloseMessageBtnClick = () => {
    setShowOrderSentMessage(false);
    setShowCartIsEmptyMessage(false);
  };

  const handleFirstNameChange = e => {
    setFirstName(e.target.value);
  };

  const handleSurnameChange = e => {
    setSurname(e.target.value);
  };

  const handleAddressChange = e => {
    setAddress(e.target.value);
  };

  const handleCityChange = e => {
    setCity(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    if (itemsOrdered.length > 0) {
      setShowOrderSentMessage(true);
      setFirstName("");
      setSurname("");
      setAddress("");
      setCity("");
    } else {
      setShowCartIsEmptyMessage(true);
    }
  };

  return (
    <div className="w-1/2">
      {showCartIsEmptyMessage && (
        <>
          <div
            onClick={onCloseMessageBtnClick}
            className="fixed z-50 w-screen h-screen bg-black opacity-30 inset-1/2 -translate-x-1/2 -translate-y-1/2"
          ></div>
          <div className="fixed text-xl flex flex-col p-8 rounded-2xl justify-between z-50 inset-1/2 w-80 h-min -translate-x-1/2 -translate-y-1/2 bg-white">
            <p className="mb-8 w-full">
              Please make sure that you add at least one product to the cart
              first.
            </p>
            <button
              className="bg-[#0097E0] text-[#F3F3F3] hover:bg-[#007EBB] rounded-md w-24 self-center"
              onClick={onCloseMessageBtnClick}
            >
              OK
            </button>
          </div>
        </>
      )}
      {showOrderSentMessage && (
        <>
          <div
            onClick={onCloseMessageBtnClick}
            className="fixed z-50 w-screen h-screen bg-black opacity-30 inset-1/2 -translate-x-1/2 -translate-y-1/2"
          ></div>
          <div className="fixed text-xl flex flex-col p-8 rounded-2xl justify-between z-50 inset-1/2 w-80 h-min -translate-x-1/2 -translate-y-1/2 bg-white">
            <p className="mb-8 w-full">
              Your order has been ordered and will be sent once address is
              confirmed!
            </p>
            <button
              className="bg-[#0097E0] text-[#F3F3F3] hover:bg-[#007EBB] rounded-md w-24 self-center"
              onClick={onCloseMessageBtnClick}
            >
              OK
            </button>
          </div>
        </>
      )}
      <form onSubmit={handleOnSubmit}>
        <div className="">
          <InputContainer>
            <TextInputLabel htmlFor="first-name">First name *</TextInputLabel>
            <TextInput
              type="text"
              id="first-name"
              onChange={handleFirstNameChange}
              value={firstName}
              required
            />
          </InputContainer>
          <InputContainer>
            <TextInputLabel htmlFor="surname">Surname *</TextInputLabel>
            <TextInput
              type="text"
              id="surname"
              onChange={handleSurnameChange}
              value={surname}
              required
            />
          </InputContainer>
          <InputContainer>
            <TextInputLabel htmlFor="address">Address *</TextInputLabel>
            <TextInput
              type="text"
              id="address"
              onChange={handleAddressChange}
              value={address}
              required
            />
          </InputContainer>
          <InputContainer>
            <TextInputLabel htmlFor="city">City *</TextInputLabel>
            <TextInput
              type="text"
              id="city"
              value={city}
              required
              onChange={handleCityChange}
            />
          </InputContainer>
        </div>
        <button className="bg-[#0097E0] text-[#F3F3F3] hover:bg-[#007EBB] py-2 px-6 mb-4 rounded-[14px]">
          Order
        </button>
      </form>
      <p className="font-bold opacity-80">
        NOTE: You pay once your order is delivered!
      </p>
    </div>
  );
}

export default CartForm;
