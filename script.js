const btnGrid = document.createElement('button');
btnGrid.classList.add('btn-grid');
btnGrid.textContent = 'Create A New Grid';
document.body.appendChild(btnGrid);

btnGrid.addEventListener('click', createNewGrid);

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const INITIAL_GRID_SIZE = 16;
createGrid(INITIAL_GRID_SIZE)

function createNewGrid() {
    const gridSize = prompt('Enter Number of Rows and Columns (limit of 100):');

    if (gridSize <= 100) {
        removeCurrentGrid();
        createGrid(gridSize);
    } else {
        alert('Grid Size Too Large!');
    }
}

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row');
        container.appendChild(rowContainer);

        for (let j = 0; j < gridSize; j++) {
            const rowItem = document.createElement('div');
            rowItem.classList.add('row__item');
            rowContainer.appendChild(rowItem);
            rowItem.addEventListener('mouseenter', (e) => {
                changeItemBackground(e);
                decreaseOpacityGradually(e)
            })
        }
    }
}

function removeCurrentGrid() {
    container.replaceChildren();
}

function changeItemBackground(e) {
    e.target.style.background = getRandomColor();
}

function getRandomColor() {
    const MAX_RGB_VALUE = 255;
    const redValue = Math.round(Math.random() * MAX_RGB_VALUE);
    const greenValue = Math.round(Math.random() * MAX_RGB_VALUE);
    const blueValue = Math.round(Math.random() * MAX_RGB_VALUE);
    return `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

function decreaseOpacityGradually(e) {
    const opacity = getComputedStyle(e.target).opacity;
    if (opacity >= 0) {
        // use whole numbers instead of decimals to avoid JS calculation inconsistencies
        e.target.style.opacity = (opacity * 100 - 10) / 100;
    }
}