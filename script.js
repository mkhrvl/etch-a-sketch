const btnGrid = document.createElement('button');
btnGrid.classList.add('btn-grid');
btnGrid.textContent = 'Create A New Grid';
document.body.appendChild(btnGrid);

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

for (let i = 0; i < 16; i++) {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row');
    container.appendChild(rowContainer);

    for (let j = 0; j < 16; j++) {
        const rowItem = document.createElement('div');
        rowItem.classList.add('row__item');
        rowContainer.appendChild(rowItem);
    }
}