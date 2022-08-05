import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart } from "chart.js/auto";


let timeperiod = [
    "Mon","Tue","Wed","Thu","Fri","Sat","Sun"
   ];
   let views = [240, 200, 270, 190, 220, 280, 230];
   let views_buy = [200, 190, 290, 230, 200, 190, 195];
let state = {
    labels: timeperiod,

    datasets: [
        {
            fill: true,
            borderWidth: 2,
            data: views,
            backgroundColor: "rgba(250, 204, 21, 1)",
            borderColor: "rgba(250, 204, 21, 1)",
            label: "Target",
        },
        {
            fill: true,
            borderWidth: 2,
            data: views_buy,
            backgroundColor: "rgba(74, 222, 128,1)",
            borderColor: "rgba(74, 222, 128,1)",
            label: "Reality"
        }
    ],
};

const screener = () => {
    if (window.screen.width < 768) {
        return 18 / 13
    }
    else if (window.screen.width >= 768 && window.screen.width < 976) {
        return 4 / 4.5
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
    else if (window.screen.width > 1920) {

    }
    else {
        return 18 / 9
    }
}

const Target = () => {
    return (
        <div className=" w-full xl:w-10/12 h-full overflow-hidden" data-aos-delay={"300"}>
            <Bar
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
                            borderWidth: 0,
                        },
                        bar:{
                            borderWidth: 0,
                            
                        },
                        line:{

                        }
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
export default Target;
