let smoothieOrders = [];


makeSmoothie = () => {
  let sTotal = 0;
  //smoothie name
  let sName = document.getElementById("smoothie").value;

  //cup sizes
  let size = document.getElementsByName("baseRadio");
  let sizeValue;
  for (let i = 0; i < size.length; i++) {
    if (size[i].checked) {
      sizeValue = size[i].value;
      sTotal = sTotal + +size[i].dataset.cost;
    }
  }
//ingretients
  let ingredients = document.getElementsByName("ingredients");
  let topArray = [];
  for (let i = 0; i < ingredients.length; i++) {
    if (ingredients[i].checked) {
      topArray.push(ingredients[i].value);
      sTotal = sTotal + +ingredients[i].dataset.cost;
    }
  }

  smoothieOrders.push({
    Name: sName,
    Size: sizeValue,
    Ingredients: topArray,
    Price: sTotal,
  });

  document.getElementById("smoothieForm").reset();
};

//card display
displaySmoothieOrders = () => {
   
    let area = document.getElementById("orders");
   

    area.innerHTML = "";

  let overallTotal = 0;

  for (let i = 0; i < smoothieOrders.length; i++) {
    let name = smoothieOrders[i].Name;
    let size = smoothieOrders[i].Size;
    let ingredients = smoothieOrders[i].Ingredients;
    let price = smoothieOrders[i].Price;

    overallTotal += price;

    area.innerHTML += `
    <div class="col-6">
            <div class="card" style="width: 100%;">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p>Size:  ${size}</p>
                <p>Ingredients:  ${ingredients}</p>
                <p>Total Cost: R${price}.00</p>
              </div>
            </div>
          </div>
          `;

  }
};
