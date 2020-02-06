init(16);

function init(gridSize) {
    const resizeButton = document.getElementById('resize-button');
    resizeButton.addEventListener('click', resize);

    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', clear);

    createGrid(gridSize);
}

function createGrid(gridSize) {
    const etchContainer = document.getElementById('container');

    gridSize = gridSize > 100 ? 100
            : gridSize < 0 ? 1
            : gridSize

    etchContainer.style.cssText = `grid-template: repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr);`;

    for (let i = 1, k = 1; i <= gridSize; i++) {
        for (let j = 1; j <= gridSize; j++, k++) {
            const etchItem = document.createElement('div');
            etchItem.className = "etch-box";
            etchItem.addEventListener('mouseenter', etch);

            etchContainer.append(etchItem);
        }
    }
}

function etch(e) {
    e.target.style.cssText = 'background-color: black;'
}

const resizeButton = document.getElementById('resize-button');
resizeButton.addEventListener('click', resize);

function resize() {
    const newGridSize = prompt("Enter number of grids (Between 1 to 100)", 0);

    createGrid(newGridSize);
    
    clear();
}

function clear() {
    const etchBoxes = document.querySelectorAll('.etch-box');

    etchBoxes.forEach(etchBox => {
        etchBox.style.cssText = 'background-color: white;';
    });
}