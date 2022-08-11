import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

// context
import { useAppContext } from "../context/appContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ slidersData }) => {
  const { getSlidersValues, getSlidersColors } = useAppContext();

  const data = {
    labels: [],
    datasets: [
      {
        data: getSlidersValues(),
        backgroundColor: getSlidersColors(),
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="bg-slate-50 rounded-md shadow-md w-full p-4">
      <p className="font-medium">Tu compensación</p>
      <p className="text-gray-400 text-sm font-medium pb-4">
        Representación gráfica de tu compensación
      </p>
      <div className="flex justify-center w-full">
        <div className="h-2/3 w-2/3">
          <Pie
            data={data}
            options={{
              plugins: {
                legend: {
                  display: false,
                  /* position: "bottom",
                  align: "start",
                  labels: {
                    boxWidth: 15,
                    boxHeight: 15,
                  }, */
                },
              },
            }}
          />
        </div>
      </div>
      <div className="flex flex-col pt-2">
        {slidersData.map((data) => {
          return (
            <div
              key={data.title}
              className="flex items-center space-x-1.5 space-y-1"
            >
              <div
                className="w-3 h-3"
                style={{ backgroundColor: data.color }}
              ></div>
              <p className="text-gray-500 font-medium text-sm">{data.title}</p>
              <p className="text-sm font-medium">{data.money}</p>
              <p className="text-sm font-medium">{"$" + data.amount}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chart;
