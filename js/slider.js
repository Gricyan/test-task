const clickButton = document.querySelector(".click-button");
const resetButton = document.querySelector(".reset-button");
const sliderBox = document.querySelector(".slider-container");
const itemsBox = document.querySelector(".item-container");

clickButton.addEventListener("click", (event) => {
  sliderBox.classList.add("active-slider");
  itemsBox.classList.add("hidden-items");
});

resetButton.addEventListener("click", (event) => {
  sliderBox.classList.remove("active-slider");
  itemsBox.classList.remove("hidden-items");
});