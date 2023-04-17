const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const code = colors[getRandomNumber()];
  color.textContent = code;
  document.body.style.backgroundColor = code;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
