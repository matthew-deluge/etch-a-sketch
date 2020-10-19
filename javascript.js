const container = document.querySelector("#grid-container"); //set container variable
function makeGrid(number) { //original grid maker--this does not rest the previous grid!
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

function paintBoxes() { //This sets up the boxes to turn a color when the cursor moves over them
let boxArray = document.querySelectorAll(".box");
boxArray.forEach(function(box) {
    box.addEventListener('mouseover', function() {
        let randomColor = getRandomColor();
        box.style.backgroundColor = randomColor;
        /*box.classList.add("box-hovered");*/
        /*box.classList.remove("box");*/
    })
})
}

function resetGrid(number) { //elimnates the previously built grid, then creates a new one
    let boxArray = document.querySelectorAll(".box");
    boxArray.forEach(function(box) {
        box.remove();
    })
    makeGrid(number);
}

function getRandomColor() {
    let nOne = Math.floor(Math.random()*256);
    let nTwo = Math.floor(Math.random()*256);
    let nThree = Math.floor(Math.random()*256);
    console.log()

    return `rgb(${nOne}, ${nTwo}, ${nThree})`;

}


const button = document.querySelector("button"); //logic for the button
button.addEventListener('click', function (){
let userNumber = prompt("How many boxes per side? Max is 100.", "Enter Number");
if(userNumber <= 100) {
    userNumber = Math.round(userNumber); //rounds in case person puts in a non-number
    resetGrid(userNumber);
    paintBoxes();
}
else {
    alert(`${userNumber} is too high, the number needs to be less than 100.`);
}

})


makeGrid(16);
paintBoxes();

