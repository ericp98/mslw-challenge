import Head from "next/head";

// components
import Sliders from "../components/Sliders";
import Chart from "../components/Chart";
import Total from "../components/Total";
import Button from "../components/SentButton";
import ModalEditSlider from "../components/ModalEditSlider";
import ModalSentData from "../components/ModalSentData";
import SliderWarning from "../components/SliderWarning";

// Context
import { useAppContext } from "../context/appContext";

export default function Home() {
  const { slidersData, handlerShowModalSentData } = useAppContext();

  return (
    <>
      <Head>
        <title>Maslow Challenge</title>
      </Head>
      <SliderWarning />
      <div className="flex min-h-screen justify-center mx-auto flex-col md:flex-row lg:w-3/4 p-4">
        <div className="flex flex-col sm:w-full md:w-3/5 lg:w-2/3 p-4">
          <Sliders slidersData={slidersData} />
        </div>
        <div className="flex flex-col sm:w-full md:w-2/5 lg:w-1/3 p-4">
          <Chart slidersData={slidersData} />
          <Total />
          <div className="flex place-self-end mt-8">
            <Button
              text="Enviar actualización"
              type="sent"
              onClick={handlerShowModalSentData}
            />
          </div>
        </div>
        <ModalEditSlider />
        <ModalSentData />
      </div>
    </>
  );
}
