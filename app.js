//GLOBALS
let container = document.querySelector('.inner-container');
let colorBtn = document.getElementById('color-btn');
let color = 'white';
let innerText = ['RBG', 'WHITE'];

function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement('div');
    cell.classList.add('grid-cell');
    container.appendChild(cell);
    cell.addEventListener('mouseover', paint);
  }
}

function paint() {
  if (color == 'white') this.style.backgroundColor = 'white';
  //else figure out RBG code!
  else if (color == 'rgb') {
    let random1 = Math.floor(Math.random() * 256);
    let random2 = Math.floor(Math.random() * 256);
    let random3 = Math.floor(Math.random() * 256);
    this.style.backgroundColor =
      'rgb(' + random1 + ', ' + random2 + ', ' + random3 + ')';
  }
}

//just clears cells
function clearGrid() {
  let newRows = prompt('Enter grid rows');
  let newCols = prompt('Enter grid cols');
  container.innerHTML = '';
  console.log(document.body);
  makeGrid(newRows, newCols);
}

function changeColor() {
  if (colorBtn.innerHTML == 'RGB') {
    colorBtn.innerHTML = 'WHITE';
    color = 'rgb';
  } else {
    colorBtn.innerHTML = 'RGB';
    color = 'white';
  }

  console.log('color');
}

makeGrid(16, 16);

console.log(document);
