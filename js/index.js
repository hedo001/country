let cardWrp = document.querySelector(".country__cont");
let elInput = document.querySelector(".search");
let elSelect = document.getElementById("region");
let obj = {};
countries.forEach((el) => (obj[el.region] = el.region));
function Add(el = []) {
  el.forEach((el) => {
    let card = document.createElement("div");
    card.className = "country__card";
    card.innerHTML = ` 
            <div class="img">
              <div class="span1 span"></div>
              <div class="span2 span"></div>
              <div class="span3 span"></div>
            </div>
            <div class="content">
               <h2>${el.name.official}</h2>
              <p>Population: 81,770,900</p>
              <p> Region: ${el.region}</p>
              <p>  Capital: ${el.capital[0]}</p>
            </div>
         `;
    cardWrp.appendChild(card);
  });
}

for (const el2 in obj) {
  elSelect.options[elSelect.options.length] = new Option(`${el2}`, `${el2}`);
}

elSelect.addEventListener("change", function (e) {
  let res = countries.filter((el) => elSelect.value == el.region);
  cardWrp.innerHTML = "";
  Add(res);
});

elInput.addEventListener("input", function (e) {
  let k = countries.filter((el) =>
    el.name.official.toLowerCase().startsWith(e.target.value.toLowerCase())
  );
  cardWrp.innerHTML = "";
  Add(k);
});
Add(countries);
