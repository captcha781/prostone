import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart } from "chart.js/auto";
let timeperiod = [
  "sep",
  "oct",
  "nov",
  "dec",
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
];
let views = [670, 890, 765, 983, 789, 776, 846, 972, 1098, 924, 854, 746];
let views_buy = [980, 1090, 875, 983, 629, 900, 1078, 836, 1076, 1253, 854, 797];
let state = {
  labels: timeperiod,

  datasets: [
    {
      fill: false,
      lineTension: 0.5,
      borderWidth: 3,
      data: views,
      borderColor: "rgb(251, 113, 133)",
      backgroundColor: "rgba(251, 113, 133,0.3)",
      label: "Visitors",


    },
    {
      fill: true,
      lineTension: 0.5,
      borderWidth: 3,
      data: views_buy,
      borderColor: "rgb(74, 222, 128)",
      backgroundColor: "rgba(74, 222, 128,0.3)",
      label: "Buyers"
    }
  ],
};

const screener = () => {
  if (window.screen.width < 768) {
    return 18 / 13
  }
  else if (window.screen.width >= 768 && window.screen.width < 976) {
    return 3 / 4
  }
  else if (window.screen.width >= 976 && window.screen.width < 1024) {
    return 14 / 14
  }
  else if (window.screen.width >= 1024 && window.screen.width < 1440) {
    return 3 / 3
  }
  else if (window.screen.width >= 1440 && window.screen.width < 1920) {
    return 16 / 9
  }
  else if (window.screen.width >1920){

  }
  else {
    return 18 / 9
  }
}

const Insights = () => {
  return (
    <div className="w-full xl:w-10/12 h-full overflow-hidden" data-aos-delay={"300"}>
      <Line
        className="w-80 lg:w-11/12 xl:w-10/12 h-full my-auto p-2 overflow-hidden"
        data={state}
        options={{
          plugins: {
            legend: {
              display: true,
              position: "bottom",
              labels: {
                boxWidth: 10,
                font: "Outfit"
              }
            }
          },
          elements: {

            point: {
              radius: 0,
            },
            arc: {
              borderWidth: 2,
            },

          },
          font: {
            size: "8px",
          },
          aspectRatio: screener(),
          onResize: () => { screener() },
          scales: {
            xAxis: {
              grid: {
                display: false,
              },
            },
            yAxis: {
              grid: {
                display: false,
              },
            },
          },



        }}
      />
    </div>
  );
};
export default Insights;
