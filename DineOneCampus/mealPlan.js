function addToMealPlan(buttonElement) {
  const dishName = buttonElement.previousElementSibling.textContent;
  const price = buttonElement.parentElement.getAttribute("data-price");
  const selectedDishes = document.getElementById("selectedDishes");

  const entry = document.createElement("div");
  entry.innerHTML = `${dishName} <button onclick="removeFromMealPlan(this, ${price})">Remove</button> <button onclick="addAnotherOrder(this, ${price})">Add Another Order</button><span class="price" hidden>${price}</span>`;

  selectedDishes.appendChild(entry);
  updateTotal();
}

function removeFromMealPlan(buttonElement, price) {
  const dishElement = buttonElement.parentElement;
  dishElement.remove();
  updateTotal();
}

function addAnotherOrder(buttonElement, price) {
  const newDishElement = buttonElement.parentElement.cloneNode(true);
  document.getElementById("selectedDishes").appendChild(newDishElement);
  updateTotal();
}

function updateTotal() {
  const prices = document.querySelectorAll("#selectedDishes .price");
  let total = 0;
  prices.forEach((priceElement) => {
    total += parseFloat(priceElement.textContent);
  });
  document.getElementById("totalAmount").textContent = total.toFixed(2);
}
