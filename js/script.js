document.getElementById("play").addEventListener("click", function () {
 play();
});

function play() {
 document.querySelector(".container-square").innerHTML = "";
 const levelSelected = parseInt(document.getElementById("level").value);
 console.log(levelSelected);

 let cellsNumber;
 let cellForSide;
 const bombsNumber = 16;
 switch (levelSelected) {
  case 1:
   cellsNumber = 100;
   break;

  case 2:
   cellsNumber = 81;
   break;

  case 3:
   cellsNumber = 49;
 }

 const bombs = generateBombs();
 console.log(bombs);

 function generateBombs() {
  const arrayBombs = [];
  while (arrayBombs.length < bombsNumber) {
   const numeroRandom = generateRandom(1, cellsNumber);
   if (!arrayBombs.includes(numeroRandom)) {
    arrayBombs.push(numeroRandom);
   }
  }

  return arrayBombs;

  function generateRandom(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 }

 cellForSide = Math.sqrt(cellsNumber);

 generatePlayground();

 function generatePlayground() {
  const size = `calc(100% / ${cellForSide})`;
  const box = document.querySelector(".container-square");

  for (let i = 1; i <= cellsNumber; i++) {
   const grid = createItem(i);

   grid.addEventListener("click", function () {
    this.classList.add("selected");
   });

   box.appendChild(grid);
  }
 }

 function createItem(num) {
  const cell = document.createElement("div");
  cell.classList.add("square");
  const size = `calc(100% / ${cellForSide})`;
  cell.style.width = size;
  cell.style.height = size;

  cell.innerHTML = num;

  return cell;
 }
}
