const container = document.querySelector("#container");
const setSizeBtn = document.querySelector(".gridSize");
// const squareBoxes = document.querySelector(".square");

setSizeBtn.addEventListener("click", function (e) {
  const sizeInput = document.querySelector("#size").value;
  const size = parseInt(sizeInput);

  if (!isNaN(size) && size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert("Enter a valid size between 1 and 100!");
  }
});

function createGrid(size) {
  container.innerHTML = "";
  const containerSize = container.clientWidth;
  const squareSize = containerSize / size;

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = squareSize + "px";
      square.style.height = squareSize + "px";
      square.addEventListener("mouseover", function (e) {
        square.style.background = getRandomHexColor();
      });
      container.appendChild(square);
    }
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(getRandomHexColor());
