const container = document.querySelector("#grid-container");
function makeGrid(number) {
    for (i=0; i<(number*number); i++) {
        container.style.gridTemplateColumns = `repeat(${number}, auto)`;
        const box = document.createElement('div');
        let size = 500/number;
        box.style.height = `${size}px`;
        box.style.width = `${size}px`;
        box.classList.add("box");
        container.appendChild(box);
    }
}

function paintBoxes() {
let boxArray = document.querySelectorAll(".box");
boxArray.forEach(function(box) {
    box.addEventListener('mouseover', function() {
        /*box.style.backgroundColor = "black";*/
        box.classList.add("box-hovered");
        /*box.classList.remove("box");*/
    })
})
}

function resetGrid(number) {
    let boxArray = document.querySelectorAll(".box");
    boxArray.forEach(function(box) {
        box.remove();
    })
    makeGrid(number);
}

const button = document.querySelector("button");
button.addEventListener('click', function (){
resetGrid(100);
paintBoxes();
})
makeGrid(100);
paintBoxes();