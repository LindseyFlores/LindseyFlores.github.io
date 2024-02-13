// Adds dish to meal plan
function addToMealPlan(buttonElement) {
  const dishName = buttonElement.previousElementSibling.textContent;
  const price = buttonElement.parentElement.getAttribute("data-price");
  const selectedDishes = document.getElementById("selectedDishes");

  //Created an entry (button) in HTML to remove the dish from the meal plan
  const entry = document.createElement("div");
  entry.innerHTML = `${dishName} <button onclick="removeFromMealPlan(this, ${price})">Remove</button> <span class="price" hidden>${price}</span>`;

  selectedDishes.appendChild(entry);
  updateTotal();
}

// Removes dish from meal plan
function removeFromMealPlan(buttonElement, price) {
  const dishElement = buttonElement.parentElement;
  dishElement.remove();
  updateTotal();
}

// Updates total price
function updateTotal() {
  const prices = document.querySelectorAll("#selectedDishes .price");
  let total = 0;
  prices.forEach((priceElement) => {
    total += parseFloat(priceElement.textContent);
  });
  document.getElementById("totalAmount").textContent = total.toFixed(2);
}
