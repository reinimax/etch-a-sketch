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
    //create a grid of divs
    for (i = 1; i <=gridSize; i++) {
        for (j = 1; j <=gridSize; j++) {
            const div = document.createElement("div");
            div.classList.add("drawingspace");
            div.style.gridRowStart = `${i}`;
            div.style.gridColumnStart = `${j}`;
            div.style.backgroundColor = "rgb(255, 255, 255)"; //reset the drawingboard
            div.style.opacity = 0.0; 
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

function draw(div) {
    //increase opacity of the div by 10%
    let opacity = parseFloat(div.style.opacity);
    if (opacity < 1) opacity += 0.1; else opacity = 1;
    div.style.opacity = opacity;
    
    //create a random RGB-value and darken it based on opacity
    let r = Math.floor(Math.random()*256) * (1 - opacity);
    let g = Math.floor(Math.random()*256) * (1 - opacity);
    let b = Math.floor(Math.random()*256) * (1 - opacity);

    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    
    
}
