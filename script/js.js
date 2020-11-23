
// http://duckwise.net/assignments/frontend-internship/cars.json


"use strict";

async function loadData() {
  let response = await fetch("json/cars.json");
  let jsonData = await response.json();
  console.log(jsonData);

}

loadData();