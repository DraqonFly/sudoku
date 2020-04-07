import {grid as Grid} from "./Grid";
import "../index.js";

export class Square {
    elem;
    id;
    uniqueNumbers;
    neighbourSquares;

    constructor(square, id) {
        console.log("constructed new square")
        this.elem = square;
        this.id = id;
        this.uniqueNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.neighbourSquares = {
            horizontal: new Array(),
            vertical: new Array()
        };
    
    }

    // Fill a 3x3 Grid
    fillSquare = () => {
        this.findNeighbourSquares();

        console.log("filling new square")
        console.log(this.elem)
        // Iterate each field contained in a square.
        this.elem.childNodes.forEach(field => {
            let randomNumber = this.createRandomInteger(this.uniqueNumbers.length);
            field.innerHTML = this.uniqueNumbers[randomNumber];
            this.uniqueNumbers.splice(randomNumber, 1); 
        })
        this.elem.style.background = "rgb(235, 156, 92)";
        this.elem.style.color = "rgb(30, 30, 30)";

        var btn = document.createElement("BUTTON");   // Create a <button> element
        btn.innerHTML = "Visualize Square neighbours";                   // Insert text
        btn.classList.add('btn');
        btn.onclick = function() {
            onClick(window.event.target, "visualizeSameRow");
        }
        this.elem.appendChild(btn);               // Append <button> to <body>

    }

    findNeighbourSquares = () => {
        if(this.id % 3 > 0) this.neighbourSquares.horizontal.push(Grid.squares[this.id -1])
        if (this.id % 3 === 2) this.neighbourSquares.horizontal.push(Grid.squares[this.id -2])
        
    }

    createRandomInteger = (max) => Math.floor(Math.random() * (max)) // Create a random Integer (excluding maximum value)

    toString = (onlyReturn) => onlyReturn ? JSON.parse(JSON.stringify(this)) : console.log(JSON.parse(JSON.stringify(this)))
}