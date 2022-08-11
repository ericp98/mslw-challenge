import { useState } from "react";
import { useAppContext } from "../context/appContext";

const Resume = () => {
  const { getTotalAmount, amountDistribute } = useAppContext();

  return (
    <div className="flex flex-col bg-slate-50 rounded-md shadow-md w-full mt-4 p-4">
      <div className="flex justify-between text-gray-400 font-medium">
        <p>Para distribuir</p>
        <p>ARS {amountDistribute}</p>
      </div>
      <div className="flex justify-between font-medium">
        <p>Total</p>
        <p>ARS {getTotalAmount()}</p>
      </div>
    </div>
  );
};

export default Resume;
