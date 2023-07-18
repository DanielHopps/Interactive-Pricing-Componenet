"use strict";

const slider = document.querySelector("#range");
const pageViews = document.querySelector("#pageviews");
const monthly = document.querySelector(".price-monthly");
const yearly = document.querySelector(".price-yearly");
const toggleButton = document.querySelector(".switch");
const toggle = document.querySelector("#toggle");

console.log(toggleButton);
console.log(toggle);

console.log(toggle);

function sliderValue() {
  if (slider.value > 0 && slider.value < 20) {
    pageViews.textContent = "10K";
    monthly.textContent = "$8.00";
    yearly.textContent = "$72.00";
  } else if (slider.value > 21 && slider.value < 40) {
    pageViews.textContent = "50K";
    monthly.textContent = "$12.00";
    yearly.textContent = "$108.00";
  } else if (slider.value > 41 && slider.value < 60) {
    pageViews.textContent = "100K";
    monthly.textContent = "$16.00";
    yearly.textContent = "$144.00";
  } else if (slider.value > 61 && slider.value < 80) {
    pageViews.textContent = "500K";
    monthly.textContent = "$24.00";
    yearly.textContent = "$225.00";
  } else if (slider.value > 81 && slider.value < 100) {
    pageViews.textContent = "1M";
    monthly.textContent = "$36.00";
    yearly.textContent = "$324.00";
  }
}

slider.addEventListener("input", function () {
  let x = slider.value;
  console.log(x);
  const color =
    "linear-gradient(90deg, hsl(174, 77%, 80%)" +
    x +
    "%, hsl(224, 65%, 95%)" +
    x +
    "%)";
  slider.style.background = color;

  sliderValue();
});

toggle.addEventListener("click", function () {
  if (toggle.checked == true) {
    yearly.parentElement.classList.remove("hide");
    monthly.parentElement.classList.add("hide");
    console.log("checked");
  } else {
    yearly.parentElement.classList.add("hide");
    monthly.parentElement.classList.remove("hide");
    console.log("not checked");
  }
});
