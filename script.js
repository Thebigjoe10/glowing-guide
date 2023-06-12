let bgcolor = new Array(
  "#FFFFFF",
  "#FF0000",
  "#FFFF00",
  "#FF00FF",
  "#FFA500",
  "#FFC0CB",
  "#FFD700",
  "#FF4500",
  "#FF8C00",
  "#DC143C",
  "#FF69B4"
);
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  document.body.style.background =
    bgcolor[Math.floor(Math.random() * bgcolor.length)];
});
