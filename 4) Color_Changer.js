const colors = [
  "LightBlue",
  "LightGreen",
  "LightCoral",
  "Lavender",
  "PeachPuff",
  "Khaki",
  "SkyBlue",
  "Plum",
];
let index = 0;
const button = document.getElementById("changeColorBtn");
const colorName = document.getElementById("color-name");
button.addEventListener("click", function () {
  index = (index + 1) % colors.length;
  const newColor = colors[index];
  document.body.style.backgroundColor = newColor;
});
