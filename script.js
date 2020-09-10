const container = document.querySelector("#container");

//create a 16x16 grid of divs
for (i = 1; i <=16; i++) {
    for (j = 1; j <=16; j++) {
        const div = document.createElement("div");
        div.classList.add("drawingspace");
        div.style.gridRowStart = `${i}`;
        div.style.gridColumnStart = `${j}`;
        container.appendChild(div);
    }
}

const drawDivs = document.querySelectorAll(".drawingspace");
drawDivs.forEach(d => d.addEventListener("mouseenter", function() {d.style.backgroundColor = "black";}) );

