const createBoard = (size) => {
    /* Selecting the board and the squares. */
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');

    /* Removing all the divs from the board. */
    squares.forEach((div) => div.remove());

   /* Setting the grid template columns and rows to the size of the board. */
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.styleTemplateRow = `repeat(${size}, 1fr)`;
    
    let amount = size * size;

 /* This is creating a for loop that is creating a div element and adding an event listener to it. */
 for(let i = 0; i < amount; i++){
    let square = document.createElement('div');
    square.addEventListener('mouseover', ()=> {
        square.style.backgroundColor = 'black'
    });

    square.style.backgroundColor = 'white';
    board.insertAdjacentElement('beforeend', square);
 };
 
};
createBoard(16);


const changeSize = (val) => {
    if(val >= 2 && val <= 100){
        createBoard(val);
    }
    else{
        console.log('Error')
    }
    
};