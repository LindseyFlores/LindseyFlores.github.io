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

function updateTotal() {
  // Get all prices and obvisiouly the starting price = 0
  const prices = document.querySelectorAll("#selectedDishes .price");
  let start = 0;
  // Loop through all prices and add them together
  prices.forEach((priceElement) => {
    start += parseFloat(priceElement.textContent);
  });
  // Updated start amount
  document.getElementById("totalAmount").textContent = start.toFixed(2);
}
