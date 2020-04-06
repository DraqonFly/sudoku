class Grid {
    size;
    elem;

    constructor() {
        this.elem = document.getElementsByClassName("grid")[0];
        this.size = 9;
    }

    // Generate a 9x9 Grid, holding 9 3x3 squares, like a Sudoku grid, really.
    generateGrid = () => {
        let itemCount = 0;
        // Iterate each row containing squares.
        for(let rowIteration=0; rowIteration<3; rowIteration++) {
            this.elem.appendChild(this.createElement('row')) // Append new row to this grid.

            // Iterate each square contained in a row.
            for(let squareIteration=0; squareIteration<3; squareIteration++) {
                let row = document.getElementsByClassName('grid__row')[rowIteration];
                row.appendChild(this.createElement('square', null, null, squareIteration + (3 *rowIteration))) // Append new square to this row.

                // Iterate each field contained in a square.
                for(let number=0; number<9; number++) {
                    let coordinates = { // Calculate coordinates for each field.
                        x: Math.floor((number%3) + (3 *squareIteration)),
                        y: (Math.floor(itemCount /3)%3) + (3 *rowIteration), 
                        square: squareIteration + (3 *rowIteration)
                    }

                    let square = document.getElementsByClassName('grid__row')[rowIteration].getElementsByClassName('grid__square')[squareIteration];
                    square.appendChild(this.createElement('item', coordinates.x, coordinates.y, coordinates.square )) // Append new field to this square.
                    itemCount++;
                }
            }
        }
    }

    // Creates an HTML-DIV-Element which optionally holds a TextNode 
    createElement = (type, x = null, y = null, s = null) => {
        var node = document.createElement('DIV');

        switch(type) { // Add node specific classname
            case 'square': node.classList.add('grid__square'); node.classList.add("s" + s); break;
            case 'row':node.classList.add('grid__row'); break;
            case 'item': node.classList.add("grid__item"); node.classList.add("s" + s); break;
        }
        if (type === 'item') { // Add item specific classnames
            node.appendChild(document.createTextNode("0"));
            node.classList.add("x" + x);
            node.classList.add("y" + y);
        }
        return node;
    }

    createRandomInteger = (max) => Math.floor(Math.random() * (max)) // Create a random Integer (excluding maximum value)

    toString = (onlyReturn) => onlyReturn ? JSON.parse(JSON.stringify(this)) : console.log(JSON.parse(JSON.stringify(this)))
}

export let grid = new Grid();