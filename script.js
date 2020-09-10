const container = document.querySelector("#container");
let gridSize = 16; //give the grid a size of 16 at start

//draw initial grid
drawNewGrid(gridSize);

const button = document.querySelector("#drawgrid");
button.addEventListener("click", function() {
    gridSize = parseInt( prompt("Enter the number of squares for each side of the new grid:") );
    removeOldGrid();
    drawNewGrid(gridSize);
});

function drawNewGrid(gridSize) {
    //limit the size to 150 divs per side.
    if (gridSize > 150) gridSize = 150;
    //create a 16x16 grid of divs
    for (i = 1; i <=gridSize; i++) {
        for (j = 1; j <=gridSize; j++) {
            const div = document.createElement("div");
            div.classList.add("drawingspace");
            div.style.gridRowStart = `${i}`;
            div.style.gridColumnStart = `${j}`;
            div.style.backgroundColor = "white"; //reset the drawingboard
            container.appendChild(div);
        }
    }
    const drawDivs = document.querySelectorAll(".drawingspace");
    drawDivs.forEach(d => d.addEventListener("mouseenter", function() {d.style.backgroundColor = "black";}) );
}

function removeOldGrid() {
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }    
}
