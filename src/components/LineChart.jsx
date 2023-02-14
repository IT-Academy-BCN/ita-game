import { primary, secondary } from "daisyui/src/colors"
import Chart from "react-apexcharts"

export default function LineChart({ totalPerWeek }) {
  const { total } = totalPerWeek
  const chartData = {
    series: [
      {
        name: "Tu evolución",
        data: [15, 52, total],
      },
      {
        name: "Tu media",
        data: [30, 30, 30],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },

      colors: [primary, secondary],

      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [5, 7, 5],
        curve: "smooth",
        dashArray: [0, 8, 5],
      },
      legend: {
        enabled: false,
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        categories: ["-2 semanas", "Semana pasada", "Esta semana"],
      },
    },
  }

  return (
    <div id="chart">
      <Chart
        options={chartData.options}
        series={chartData.series}
        height={350}
      />
    </div>
  )
}
