// Context
import { useAppContext } from "../context/appContext";

// components
import Button from "./SentButton";

const ModalSentData = () => {
  const {
    amountDistribute,
    showModalSentData,
    handlerShowModalSentData,
    reset,
  } = useAppContext();

  const isPositiveAmount = () => amountDistribute > 0;

  const closeModal = () => {
    if (isPositiveAmount()) reset();
    handlerShowModalSentData();
  };

  return showModalSentData ? (
    <div className="fixed bg-gray-500/50 w-full h-full top-0 left-0">
      <div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8 items-center">
        <div className="text-lg uppercase pb-2">
          {isPositiveAmount()
            ? "Formulario envíado"
            : "No se pudo enviar el formulario"}
        </div>
        <div className="text-sm font-bold pb-4 border-b border-t p-4">
          {isPositiveAmount()
            ? "Formulario envíado con exito"
            : "No se pudo enviar el formulario porque no hay suficiente dinero para distribuir"}
        </div>
        <div className="flex justify-around mt-4">
          <Button text="Aceptar" type="sent" onClick={() => closeModal()} />
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalSentData;
