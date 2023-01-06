const button = document.querySelector(".btn");
console.log(button);
let clicked = false;

button.addEventListener("click", () => {
  if (!clicked) {
    button.style.background = "#5CD3A8";
    button.textContent = "following";
  } else {
    button.style.background = "#EBD8FF";
    button.textContent = "follow";
  }

  clicked = !clicked;
});
