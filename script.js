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
            div.style.opacity = 0.1;
            container.appendChild(div);
        }
    }
    const drawDivs = document.querySelectorAll(".drawingspace");
    drawDivs.forEach(d => d.addEventListener("mouseenter", function(e) {
        draw(e.target);
    }) );
}

function removeOldGrid() {
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }    
}

function createRandomRGB() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

function draw(div) {
    div.style.backgroundColor = createRandomRGB();
    let opacity = parseFloat(div.style.opacity);
    opacity += 0.1;
    div.style.opacity = opacity;
    console.log(div.style.opacity);
}
