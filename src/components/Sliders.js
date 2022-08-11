// Components
import Slider from "./Slider";

// Context
import { useAppContext } from "../context/appContext";

const Sliders = ({}) => {
  const { slidersData } = useAppContext();
  return slidersData.map((slider) => {
    return <Slider key={slider.title} slider={slider} />;
  });
};
export default Sliders;
