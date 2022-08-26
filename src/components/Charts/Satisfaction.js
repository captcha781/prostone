import { Line } from "react-chartjs-2";

// eslint-disable-next-line
import { Chart } from "chart.js/auto";

let satisfaction = {
    lastMonth: "3,504",
    thisMonth: "5,719"
}

let timeperiod = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
 
];
let views = [230,215,220,250,220,250,235];
let views_buy = [270,250,256,272,257,280,300];



let state = {
  labels: timeperiod,

  datasets: [
    {
      fill:true,
      lineTension: 0.2,
      borderWidth: 3,
      data: views,
      borderColor: "rgba(37, 99, 235,1)",
      backgroundColor: "rgba(37, 99, 235,0.2)",
      label: `last month - ${satisfaction.lastMonth}`,
    },
    {
      fill: true,
      lineTension: 0.2,
      borderWidth: 3,
      data: views_buy,
      borderColor: "rgb(74, 222, 128)",
      backgroundColor: "rgba(74, 222, 128,0.2)",
      label: `this month - ${satisfaction.thisMonth}`
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

const Satisfaction = () => {
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
                font: "Outfit",
              },
            }
          },
          elements: {
            point: {
              radius: 2,
            },
            arc: {
              borderWidth: 1,
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
                display: false
              },
              ticks:{
                display:false
              }
            },
            yAxis: {
              grid: {
                display: false,
              },
              ticks:{
                display:false
              }
            },
          },



        }}
      />
    </div>
  );
};
export default Satisfaction;
