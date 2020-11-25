
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
      if(card.initials.variant == null )
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
        
            card.images = ["img/missing-img-sample.jpg"];
        }
        

      htmlTemplate += `  
      <article>
            <div class="card">
              <div class="card-img-container">
                  <img src="${card.images[0]}" alt="${card.title} image" class="card-img">
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
                  <div onclick="appendCar('${card.ID}')" class="card-bottom-container"> 
                      <p onclick="appendCar('${card.ID}')">More details</p> 
                      
                      <p><b>${card.initials.price} Dkk</b></p>
  
                  </div>
  
              </div>
          </div>
          </article>
  `;
  }
  document.querySelector("#display").innerHTML = htmlTemplate;


};


function appendCar(car_id)
{
    let spec_car_display ="";
    for (const car of _cards) {

        if(car_id==car.ID)
        {
            spec_car_display = `
            <section class="big-card">
            <h1 class="_title-a">${car.title}</h1>
            <p onclick="appendCards(_cards)" >&#10005;</p>
            <h2 class="pris-a">3453495 dkk</h2>
            <table>
 
                <tr>
                  <td>variant</td>
                  <td>Performance</td>
                  
                </tr>
                <tr>
                  <td>Rækkevide</td>
                  <td>480 WLTP</td>
                </tr>
                <tr>
                  <td>Batteri</td>
                  <td>75.0 kwh</td>
                </tr>
                 <tr>
                  <td>Garanti</td>
                  <td>5 év</td>
                </tr>
                 <tr>
                  <td>0 - 100 Km/t</td>
                  <td>3.7 | sek</td>
                </tr>
                 <tr>
                  <td>Vægt</td>
                  <td>75.0 kg</td>
                </tr>
                 <tr>
                  <td>Maksimum hastighed</td>
                  <td>241 Km / t</td>
                </tr>
                 <tr>
                  <td>Opladning</td>
                  <td>Type 2 (16kWh)</td>
                </tr>
                 <tr>
                  <td>Opladning (hurtig)</td>
                  <td>CSS Type 2 (220kWh)</td>
                </tr>
                
              </table>
              <div <p class="description">Smart EQ fortwo er den sjoveste elbil. Man bliver glad af at kigge p\u00e5\u00a0Smart EQ fortwo og glad for at k\u00f8re i den.</p>
                </div>
             <div class="gallery-container">
             ${displayImages(car.images)}
             </div>
        </section>
        
            
            `;
            
        }
        
    }

    document.querySelector("#display").innerHTML = spec_car_display;
}

function displayImages(image_arr) {
    let template = "";
   console.log(image_arr);
    for (const image of image_arr) 
    {
        template += `<img src="${image}" class="image-a">`;
    }
    return template;
}