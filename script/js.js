
// http://duckwise.net/assignments/frontend-internship/cars.json


"use strict";

let _cards = [];

async function loadData() {
  let response = await fetch("json/cars.json");
  let jsonData = await response.json();
  console.log(jsonData);
  _cards = jsonData.data;
  appendCards(_cards);
  probaa(_cards);
  
}

loadData();


function appendCards(cards) {
  let htmlTemplate = "";
  let dkk = "Dkk";
  for (let card of cards) {
      if(card.initials.variant == null )
      {
        card.initials.variant = "";
      }
      if (card.initials.price == null || card.initials.price == "0")
      {
        card.initials.price = "";
        dkk = "";
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
                          <p>Rækkevide</p>
                      </div>
                      <div class="card-extras-text">
                          <p>${card.main.Batteri.data} ${card.main.Batteri.after}</p>
                          <p>${card.main.Rækkevide.data} ${card.main.Rækkevide.after}</p>
                      </div>
  
  
                  </div>
                  <hr>  
                  <div class="vl"></div>
                  <div onclick="appendCar('${card.ID}')" class="card-bottom-container"> 
                      <p onclick="appendCar('${card.ID}')">More details</p> 
                      
                      <p><b>${card.initials.price} ${dkk}</b></p>
  
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
    let dkk = "Dkk";
    for (const car of _cards) {
      if(car.initials.variant == null )
      {
        car.initials.variant = "";
      }
      if (car.main.Batteri.data == null )
      {
        car.main.Batteri.data = "-";
        car.main.Batteri.after = "";
       ;
      }
      if (car.main.Rækkevide.data == null )
      {
        car.main.Rækkevide.data = "-";
      }
      if (car.main.Garanti.data == null )
      {
        car.main.Garanti.data = "-";
      }
      if (car.initials.price == "" || car.initials.price == "-")
      {
        car.initials.price = "";
        dkk = "";
      }


        if(car_id==car.ID)
        {
            spec_car_display = `
            
            <section class="big-card">
            <h1 class="_title-a">${car.title}</h1>
            <p onclick="appendCards(_cards)" >&#10005;</p>
            <h2 class="pris-a">${car.initials.price} ${dkk}</h2>
            <table>
 
                <tr>
                  <td>variant</td>
                  <td>${car.initials.variant}</td>
                  
                </tr>
                <tr>
                  <td>Rækkevide</td>
                  <td>${car.main.Rækkevide.data} ${car.main.Rækkevide.after}</td>
                </tr>
                <tr>
                  <td>Batteri</td>
                  <td>${car.main.Batteri.data} ${car.main.Batteri.after}</td>
                </tr>
                 <tr>
                  <td>Garanti</td>
                  <td>${car.main.Garanti.data}</td>
                </tr>
                 <tr>
                  <td>0 - 100 Km/t</td>
                  <td>${car.main['0 - 100 Km/t'].data} ${car.main['0 - 100 Km/t'].after}</td>
                </tr>
                 <tr>
                  <td>Vægt</td>
                  <td>${car.main.Vægt.data} ${car.main.Vægt.after}</td>
                </tr>
                 <tr>
                  <td>Maksimum hastighed</td>
                  <td>${car.extra['Maksimum hastighed']}</td>
                </tr>
                 <tr>
                  <td>Opladning</td>
                  <td>${car.extra.Opladning}</td>
                </tr>
                 <tr>
                  <td>Opladning (hurtig)</td>
                  <td>${car.extra['Opladning (hurtig)']}</td>
                </tr>
                
              </table>
              <div <p class="description">${car.description}</p>
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
        template += ` <a href="${image}"> <img src="${image}" class="image-a"></a>`;
    }
    return template;
}

function searchCards (value)
{
  let filteredCards = [];
  for (const card of _cards)
  {
    let carName = card.title.toLowerCase();
    let carBrand = card.initials.brand.toLowerCase();
   
    if (carName.includes(value.toLowerCase())) 
    {
      filteredCards.push(card);
    }
    else if (carBrand.includes(value.toLowerCase())) 
    {
      filteredCards.push(card);
    }
  appendCards(filteredCards);
 
}
}


function probaa (bejon)
{
  for (const csa of bejon)
  {
    var holll = []
    holll = csa.main['0 - 100 Km/t'].data;
  }
  console.log(holll);
}
