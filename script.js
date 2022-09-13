const container = document.querySelector('#container');
const rows = document.querySelector('.gridRow');
const cols = document.querySelector('.gridCol');


const makeRow = (rowNum) => {
    for(let i = 0; i < rowNum; i++){
        let row = document.createElement('div');
        container.appendChild(row);
        row.classList.add('gridRow');
    };
};


const makeCol = (colNum) => {
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < colNum; j++){
            let col = document.createElement('div');
            rows[j].appendChild(col);
            col.classList.add('gridCol')
        };
    };
};


const makeGrid = () => {
    makeRow(16);
    makeCol(16);
};
console.log(makeGrid());