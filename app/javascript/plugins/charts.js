require("chartkick")
require("chart.js")
import Chart from 'chart.js';


// const smartPlugMonth = () => {
//   const line = document.querySelector('#chart-line');
//   if (line){
//     new Chartkick.LineChart("chart-line", gon.smart_plug_data, {colors: ["#1fe5bd"]})
//   };
// }

const smartPlugDaily = () => {
  const line = document.querySelector('#smart-plug-daily');
  let data = []
  let labels = []
  if (line){

    for (let [key, value] of Object.entries(gon.smart_plug_daily)) {
      data.push(value);
      labels.push(key);
    }
        var myChart = new Chart(line, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  data: data,
                  label: 'Watt',
                  borderColor: ["#1fe5bd"],
                  backgroundColor: ["#1fe5bd"]
              }],
          },
          options: {
            legend: { position: 'bottom',
                      onClick:  stefan },
            elements: { point:{ radius: 0 }},
            tooltips: { mode: 'index', intersect: false },
            hover: { mode: 'nearest', intersect: true },
            scales: { yAxes: [{ ticks: { suggestedMax: 2000 } }],
                      xAxes: [{ ticks: { min: "00:00" } }] }
          }
      });
  };
}

const smartPlugMonth = () => {
  const line = document.querySelector('#smart-plug-month');
  let data = []
  let labels = []

  if (line){
    for (let [key, value] of Object.entries(gon.smart_plug_data)) {
      data.push(value);
      labels.push(key);
    }
  // console.log(labels)
  // console.log(data)
    var myChart = new Chart(line, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  data: data,
                  label: 'W/h',
                  borderColor: ["#1fe5bd"],
                  backgroundColor: ["#1fe5bd"],
                  pointBackgroundColor: 'rgba(31, 229, 189, 1)',
                  fill: false
              }],
          },
          options: {
            legend: { position: 'bottom',
                      onClick:  stefan },
            tooltips: { mode: 'index', intersect: false },
            hover: { mode: 'nearest', intersect: true },
            elements: { point:{ radius: 3 }},
            scales: { yAxes: [{ ticks: { suggestedMax: 12000 } }] }
          }
      });
    buttonClick(myChart, line);
  };
}

const householdMonth = () => {
  const line = document.querySelector('#household-month');
  let data = []
  let labels = []

  if (line){
    for (let [key, value] of Object.entries(gon.household)) {
      data.push(value);
      labels.push(key);
    }
    // console.log(labels)
    // console.log(data)
    var myChart = new Chart(line, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  data: data,
                  label: 'KW/h',
                  borderColor: ["#1fe5bd"],
                  backgroundColor: ["#1fe5bd"],
                  pointBackgroundColor: 'rgba(31, 229, 189, 1)',
                  fill: false
              }],
          },
          options: {
            legend: { position: 'bottom',
                      onClick:  stefan },
            elements: { point:{ radius: 3 }},
            tooltips: { mode: 'index', intersect: false },
            hover: { mode: 'nearest', intersect: true },
            scales: { yAxes: [{ ticks: { beginAtZero: true, suggestedMax: 20, } }] }
          }
      });
  };
}

const donut_test = () => {
  const ctx = document.getElementById('donut-chart'); // .getContext('2d');
  let data = []
  let labels = []
  gon.donut_data.forEach(element => { data.push(element[1]), labels.push(element[0]) });
  if (ctx){
    var myChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
              labels: labels,
              datasets: [{
                  data: data,
                  label: 'Renewables Doughnut',
                  borderColor: ["#6DE676", "#F34A69", "#F5D671", "#FFFF3F"],
                  backgroundColor: ["#6DE676", "#F34A69", "#F5D671", "#FFFF3F"],
              }],
          },
          options: {
            legend: { position: 'bottom',
                      onClick:  stefan }
          }
    });
  };
}


const detailsBar = () => {
  let bar = document.querySelector('#chart-bar');
  if (bar){
    new Chartkick.BarChart("chart-bar",
                            gon.chart_data,
                            { colors: ["#00ced1", "#F34A69", "#F34A69", "#F34A69", "#00ced1", "#F34A69", "#F34A69", "#F34A69", "#F34A69", "#F34A69", "#F34A69", "#F34A69", "#F34A69", "#F34A69", "#F34A69", "#F34A69"], suffix: " MW" } )

  };
}

const renewableForecast = () => {
  let re_forecast = document.querySelector('#chart-re-forecast');
  if (re_forecast){
    new Chartkick.LineChart("chart-re-forecast",
                            gon.renewable_forecast,
                            { colors: ["#00ced1"],
                            legend: "bottom", ytitle: "production in MW",
                            label: "all renewables", points: false } )
  };

  let re_forecast_breakdown = document.querySelector('#chart-forecast');
  if (re_forecast_breakdown){
    new Chartkick.ColumnChart("chart-forecast",
                              gon.re_breakdown_data,
                              {stacked: true,
                              colors: ["#00ced1", "#6fd6d6", "#a1eaea"],
                              legend: "bottom", ytitle: "production in MW"})
  };
}

const donut = () => {
  const donut = document.querySelector('#chart-donut');
  if (donut) {
    new Chartkick.PieChart("chart-donut", gon.donut_data, {colors: ["#00ced1", "#FD3AA9", "#F5D671", "#eeef20"], legend: "bottom", donut: true})
  };
}

const showCharts = () => {

  donut();
  detailsBar();
  renewableForecast();
  smartPlugMonth();
  // donut_test();
  smartPlugDaily();
  householdMonth();

}

const buttonClick = (chart, element) => {
  element.onclick = function(evt) {
  let activePoint = chart.getElementAtEvent(event);

  // make sure click was on an actual point
  if (activePoint.length > 0) {
    let clickedDatasetIndex = activePoint[0]._datasetIndex;
    let clickedElementindex = activePoint[0]._index;
    console.log(clickedElementindex)
    console.log(activePoint[0]._options)
  }
};
}

const stefan = () => {
  console.log("energywatch is awesome!")
}


export { showCharts }

