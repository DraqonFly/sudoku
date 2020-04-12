class GeneratorClass {

    squares;
    targetSquare;
    targetSquareID;
    allowedInSquare;
    
    constructor() {
        console.log("Generator constructed");
        this.targetSquare = null;
        this.allowedInSquare  = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }

    startGeneration = () => {
        this.moveToSquare(0);
        console.log(this.createRandomNumber(4))
    }

    toString = () => {
        console.log(this);
    }

    setSquares = (squares) => {
        this.squares = squares;
    }

    moveToSquare = (id) => {
        this.targetSquareID = id;
        this.targetSquare = this.squares[this.targetSquareID];
    }

    generateValues = () => {

    }

    createRandomNumber = (max) => {
        return Math.floor((Math.random() * max) + 1)
    }
}

export let GeneratorInstance = new  GeneratorClass();