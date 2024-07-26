const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (button2) => {
    display.value += button.value;
  });
});

const clear = document.getElementById("clear");

clear.addEventListener("click", () => {
  display.value = "";
});

const delButton = document.querySelector(".button");

delButton.addEventListener("click", () => {
  display.value = display.value.slice(0, display.value.length - 1);
});

const evalButton = document.querySelector(".button2");

evalButton.addEventListener("click", () => {
  display.value = eval(display.value);
});


