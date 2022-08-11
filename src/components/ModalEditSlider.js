// Context
import { useState } from "react";
import { useAppContext } from "../context/appContext";

// components
import Button from "./SentButton";

const ModalEditSlider = () => {
  const [inputValue, setinputValue] = useState("");
  const { showModal, handlerShowModal, handlerAmountDistribute } =
    useAppContext();

  const isValidValue = () => {
    let intInput = parseInt(inputValue);
    return showModal.minAmount <= intInput && showModal.maxAmount >= intInput;
  };

  const closeModal = () => {
    handlerShowModal();
    setinputValue("");
  };

  const sentValue = () => {
    if (isValidValue()) {
      if (
        handlerAmountDistribute(
          showModal.multiply,
          parseInt(inputValue),
          showModal.oldAmount,
          showModal.sliderTitle
        )
      ) {
        setinputValue("");
        handlerShowModal();
      } else {
        alert("El monto a distribuir no es suficiente");
      }
    } else {
      alert("El valor introducido esta fuera del rango disponible");
    }
  };

  return showModal.isOpen ? (
    <div className="fixed bg-gray-500/50 w-full h-full top-0 left-0">
      <div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8">
        <div className="text-2xl font-bold pb-4">Introducir valor</div>
        <div className="pb-4">
          <input
            type="number"
            className="border"
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
          />
        </div>
        <div className="flex justify-around">
          <Button text="Cancelar" type="cancel" onClick={() => closeModal()} />
          <Button text="Enviar" type="sent" onClick={() => sentValue()} />
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalEditSlider;
