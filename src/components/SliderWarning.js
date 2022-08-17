import { AiOutlineClose } from "react-icons/ai";

// Context
import { useAppContext } from "../context/appContext";

const SliderWarning = () => {
  const { showWarning, handlerShowWarning } = useAppContext();

  return (
    <div
      className={`${
        showWarning ? "flex" : "hidden"
      } w-full md:w-3/4 border mx-auto bg-red-100 p-4 rounded-lg mt-2 text-red-700 justify-between items-center`}
    >
      <p>El valor que se intenta ingresar se sale del rango</p>
      <AiOutlineClose
        onClick={() => handlerShowWarning(false)}
        className="hover:cursor-pointer"
      />
    </div>
  );
};

export default SliderWarning;
