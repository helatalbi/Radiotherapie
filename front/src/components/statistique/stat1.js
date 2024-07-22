import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Prescription",
    "Scanner de simulation",
    "Importation du scanner",
    "Contourage",
    "Dosimetrie",
    "Validation",
    "Controle qualité",
  ],
  datasets: [
    {
      label: "Nombre des patients ",
      data: [12, 19, 3, 5, 2, 3, 7],
      backgroundColor: [
        "rgba(255, 0, 124, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 112, 0, 0.2)",
        "rgba(255, 157, 230, 0.2)",
        "rgba(8, 255, 0, 0.2)",
        "rgba(0, 251, 255, 0.2)",
        "rgba(251, 255, 0, 0.2)",
      ],
      borderColor: [
        "rgba(255, 0, 124, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 112, 0, 1)",
        "rgba(255, 157, 230, 1)",
        "rgba(8, 255, 0, 1)",
        "rgba(0, 251, 255, 1)",
        "rgba(251, 255, 0, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function Stat1() {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
}
export default Stat1;
