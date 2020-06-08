// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

require("chartkick")
require("chart.js")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";
import { scroller } from '../components/scroll_event';

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';



document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  scroller();

  let donut = document.querySelector('#chart-donut');
  if (donut) {
    new Chartkick.PieChart("chart-donut", gon.donut_data, {colors: ["#1fe5bd", "#FB1E7F", "#A6D9F7", "#FFFF3F"], legend: "bottom", donut: true})
  };

  let bar = document.querySelector('#chart-bar');
  if (bar){
    new Chartkick.BarChart("chart-bar", gon.chart_data, {colors: ["#1fe5bd"]})
  };

  let line = document.querySelector('#chart-line');
  if (line){
    new Chartkick.LineChart("chart-line", gon.smart_plug_data, {colors: ["#1fe5bd"]})
  }

  // chart set up for forecast data
  let forecast = document.querySelector('#chart-forecast');
  if (forecast){
    // gon.test_data to be replaced with forecast data
    new Chartkick.LineChart("chart-forecast", gon.test_data, {colors: ["#1fe5bd"], legend: "bottom"})
  }
});
