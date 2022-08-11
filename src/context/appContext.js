import { createContext, useContext, useState } from "react";
// Sliders Data
import { data } from "../data/Data";

export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [slidersData, setSlidersData] = useState(data);
  const reset = () => {
    setAmountDistribute(0);
    setSlidersData(data);
  };

  const [amountDistribute, setAmountDistribute] = useState(0);
  const handlerAmountDistribute = (multiply, newAmount, oldAmount, title) => {
    let isValidAmount = true;
    let newAmountDistribute;
    if (newAmount < oldAmount) {
      newAmountDistribute =
        amountDistribute + (oldAmount - newAmount) / multiply;
    }

    if (newAmount > oldAmount) {
      newAmountDistribute =
        amountDistribute - (newAmount - oldAmount) * multiply;
    }

    if (newAmountDistribute >= 0) {
      setAmountDistribute(newAmountDistribute);
      handlerSlidersData(title, newAmount);
      return isValidAmount;
    }

    return !isValidAmount;
  };

  const [showModalSentData, setShowModalSentData] = useState(false);
  const handlerShowModalSentData = () =>
    setShowModalSentData(!showModalSentData);

  const [showModal, setShowModal] = useState({ isOpen: false });
  const handlerShowModal = (slider, oldAmount) => {
    slider
      ? setShowModal({
          sliderTitle: slider.title,
          maxAmount: slider.maxAmount,
          minAmount: slider.minAmount,
          multiply: slider.multiply,
          oldAmount,
          isOpen: !showModal.isOpen,
        })
      : setShowModal({ isOpen: !showModal.isOpen });
  };

  /* Update amount in slidersData */
  const handlerSlidersData = (title, value) => {
    let newData = slidersData.map((slider) => {
      if (title === slider.title) {
        return { ...slider, amount: value };
      }
      return slider;
    });
    setSlidersData(newData);
  };

  /* Get sliders values in Array */
  const getDataFromSliders = (data) => {
    let values = slidersData.map((slider) => {
      return slider[data];
    });
    return values;
  };

  const getTotalAmount = () => {
    let total = 0;
    slidersData.forEach((data) => {
      total += data.amount;
    });
    return total;
  };

  return (
    <AppContext.Provider
      value={{
        slidersData,
        handlerSlidersData,
        showModal,
        handlerShowModal,
        getDataFromSliders,
        getTotalAmount,
        amountDistribute,
        handlerAmountDistribute,
        showModalSentData,
        handlerShowModalSentData,
        reset,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
