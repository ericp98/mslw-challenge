// Context
import { useAppContext } from "../context/appContext";

// components
import Button from "./SentButton";

const ModalSentData = () => {
  const { showModalSentData, handlerShowModalSentData, reset } =
    useAppContext();

  const closeModal = () => {
    reset();
    handlerShowModalSentData();
  };

  return showModalSentData ? (
    <div className="fixed bg-gray-500/50 w-full h-full top-0 left-0">
      <div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8">
        <div className="text-sm font-bold pb-4">Actualización enviada</div>
        <div className="flex justify-around">
          <Button text="Aceptar" type="sent" onClick={() => closeModal()} />
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalSentData;
