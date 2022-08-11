import React, { useEffect, useState } from "react";
import { MdModeEditOutline } from "react-icons/md";

// Context
import { useAppContext } from "../context/appContext";

const Slider = ({ slider }) => {
  const { handlerShowModal, handlerAmountDistribute } = useAppContext();

  const [amountValue, setAmountValue] = useState(slider.amount);

  useEffect(() => {
    setAmountValue(slider.amount);
  }, [slider.amount]);

  const handlerAmount = (title, multiply, amount) => {
    if (handlerAmountDistribute(multiply, amount, amountValue, title)) {
      setAmountValue(amount);
    } else {
      alert("Not amount available to assign");
    }
  };

  return (
    <div
      key={slider.title}
      className="bg-slate-50 rounded-md h-56 drop-shadow-md mb-8 flex flex-col justify-center px-16"
    >
      <div className="flex justify-between font-medium">
        <p className="uppercase">{slider.title}</p>
        <p className="text-sm">{slider.multiply + "x"}</p>
      </div>
      <div className="text-gray-500">
        <p>{slider.frequency}</p>
        <p className="uppercase">{slider.money}</p>
        <p>{slider.subtitle}</p>
        <input
          style={{
            /* WebkitAppearance: "none", */
            /* overflow: "hidden", */
            accentColor: slider.color,
            width: "100%",
            height: "30px",
            /* borderRadius: "3px",
              backgroundColor: "#d9d9d9",
               */
          }}
          type="range"
          value={amountValue}
          max={slider.maxAmount}
          min={slider.minAmount}
          onChange={(e) =>
            handlerAmount(
              slider.title,
              slider.multiply,
              parseInt(e.target.value)
            )
          }
          /* id={slider.title} */
          /* className="w-full py-4" */
        />
      </div>
      <div className="flex justify-between text-gray-500 -mt-3">
        <p>{slider.minAmount}</p>
        <p>{slider.maxAmount}</p>
      </div>
      <div className="flex justify-end mt-3">
        <div className="hover:cursor-pointer">
          <MdModeEditOutline
            onClick={() => handlerShowModal(slider, amountValue)}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;