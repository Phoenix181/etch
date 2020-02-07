init(16);

function init(gridSize) {
    const resizeButton = document.querySelector('#resize-button');
    resizeButton.addEventListener('click', resize);

    const resetButton = document.querySelector('#reset-button');
    resetButton.addEventListener('click', clear);

    createGrid(gridSize);
}

function createGrid(gridSize) {
    const etchContainer = document.querySelector('#container');

    gridSize = gridSize > 100 ? 100
            : gridSize < 0 ? 1
            : gridSize

    etchContainer.style.gridTemplate =  `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`;

    for (let i = 1; i <= gridSize*gridSize; i++) {
            const etchItem = document.createElement('div');
            etchItem.className = "etch-box unhovered";
            etchItem.addEventListener('mouseenter', etch);

            etchContainer.append(etchItem);
    }
}

function etch(e) {
    e.target.className = "etch-box hovered";
}

function resize() {
    const newGridSize = prompt("Enter number of grids (Between 1 to 100)", 0);

    removeGrid();

    createGrid(newGridSize);
    
    clear();
}

function removeGrid() {
    const etchBoxes = document.querySelectorAll('.etch-box');

    etchBoxes.forEach(etchBox => {
        etchBox.remove();
    });
}

function clear() {
    const etchBoxes = document.querySelectorAll('.etch-box');

    etchBoxes.forEach(etchBox => {
        etchBox.className = "etch-box unhovered";
    });
}