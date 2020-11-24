
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

let szam = 0;


function appendCards(cards) {
  let htmlTemplate = "";
  for (let card of cards) {
      if(card.values == null )
      {
        card.initials.variant = "";
      }
      if (card.main.Batteri.data == null )
      {
        card.main.Batteri.data = "";
        card.main.Batteri.after = "";
       ;
      }
      if (card.main.Rækkevide.data == null )
      {
        card.main.Rækkevide.data = "";
      }
        if (typeof card.images == "undefined")
        {
            card.images = "img/missing-img-sample.jpg";
        }
        

      htmlTemplate += `  
      <article>
            <div class="card">
              <div class="card-img-container">
                  <img src="${card.images}" alt="${card.title} image" class="card-img">
              </div>
              <div class="card-text-container">
                  <div>
                      <h1 class="_title">${card.title}</h1>
                      <h2 class="brand">${card.initials.brand}</h2>
                      <h3 class="variant">${card.initials.variant}</h3>
                  </div>
                  <div class="extras-container">
                      <div class="card-extras-title">
                          <p>Battery</p>
                          <p>WLTP</p>
                      </div>
                      <div class="card-extras-text">
                          <p>${card.main.Batteri.data} ${card.main.Batteri.after}</p>
                          <p>${card.main.Rækkevide.data}</p>
                      </div>
  
  
                  </div>
                  <hr>  
                  <div class="vl"></div>
                  <div class="card-bottom-container"> 
                      <p>More details</p> 
                      
                      <p><b>${card.initials.price} Dkk</b></p>
  
                  </div>
  
              </div>
          </div>
          </article>
  `;
  }
  document.querySelector("#display").innerHTML = htmlTemplate;
  console.log(szam);

};

function checkForNull(inn)
{
if (inn == "null")
console.log("egynull");
}