// Select color input
let colorInput = document.querySelector('#colorPicker');

// Select size input
let hightInput = document.querySelector('#inputHeight');
let widthInput = document.querySelector('#inputWidth');

// When size is submitted by the user, call makeGrid()
let form = document.querySelector('#sizePicker');
form.addEventListener('submit', (e) => {
   e.preventDefault();
   makeGrid(e);
});

// table #pixelCanvas
let table = document.querySelector('#pixelCanvas');

function changeColor(e) {
   if (e.target.nodeName === 'TD') {
      e.target.style.background = colorInput.value;
   }
}

function makeGrid(e) {
   table.innerText = '';
   console.log(hightInput);
   for (let h = 0; h < hightInput.value; ++h) {
      // create row
      const row = table.insertRow(-1);
      for (let w = 0; w < widthInput.value; ++w) {
         // create cell for each row
         const cell = row.insertCell(-1);
         // cell.onclick = changeColor; // dont do this because this not the best solution
      }
   }
}

table.addEventListener('click', changeColor);
