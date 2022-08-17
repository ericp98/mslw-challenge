// Context
import { useState } from "react";
import { useAppContext } from "../context/appContext";

// components
import Button from "./SentButton";

const ModalEditSlider = () => {
  const [inputValue, setinputValue] = useState("");
  const {
    showModal,
    handlerShowModal,
    handlerAmountDistribute,
    showWarning,
    handlerShowWarning,
  } = useAppContext();

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
      handlerAmountDistribute(
        showModal.multiply,
        parseInt(inputValue),
        showModal.oldAmount,
        showModal.sliderTitle
      );
      if (showWarning) handlerShowWarning(false);
      setinputValue("");
      handlerShowModal();
    } else {
      setinputValue("");
      handlerShowModal();
      handlerShowWarning(true);
    }
  };

  return showModal.isOpen ? (
    <div className="fixed bg-gray-500/50 w-full h-full top-0 left-0">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8">
        <div className="flex flex-col items-center border-b">
          <div className="pb-4 border-b text-lg uppercase">
            {`Asignar un nuevo valor para ${showModal.sliderTitle}`}
          </div>
          <div className="p-4">
            <input
              type="number"
              className="border"
              value={inputValue}
              onChange={(e) => setinputValue(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-around pt-4">
          <Button text="Cancelar" type="cancel" onClick={() => closeModal()} />
          <Button text="Enviar" type="sent" onClick={() => sentValue()} />
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalEditSlider;
