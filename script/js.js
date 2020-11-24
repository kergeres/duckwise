
// http://duckwise.net/assignments/frontend-internship/cars.json


"use strict";

let _cards = [];

async function loadData() {
  let response = await fetch("json/cars.json");
  let jsonData = await response.json();
  console.log(jsonData);
  _cards = jsonData.data;
  appendCards(_cards);

}

loadData();



function appendCards(cards) {
  let htmlTemplate = "";
  for (let card of cards) {
      
    console.log('nagyerunk');
      htmlTemplate += `
              
      <article>
            <div class="card">
              <div class="card-img-container">
                  <img src="img/prius-test-img.jpg" class="card-img">
              </div>
              <div class="card-text-container">
                  <div>
                      <h1 class="_title">${card.title}</h1>
                      <h2 class="brand">Volvo</h2>
                      <h3 class="variant">Long range plus</h3>
                  </div>
                  <div class="extras-container">
                      <div class="card-extras-title">
                          <p>Battery</p>
                          <p>WLTP</p>
                      </div>
                      <div class="card-extras-text">
                          <p>78 kw</p>
                          <p>456</p>
                      </div>
  
  
                  </div>
                  <hr>  
                  <div class="vl"></div>
                  <div class="card-bottom-container"> 
                      <p>More details</p> 
                      
                      <p><b>69 850 Dkk</b></p>
  
                  </div>
  
              </div>
          </div>
          </article>
  `;
  }
  document.querySelector(".iz").innerHTML = htmlTemplate;

};