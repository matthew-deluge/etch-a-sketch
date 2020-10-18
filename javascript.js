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

makeGrid(16);