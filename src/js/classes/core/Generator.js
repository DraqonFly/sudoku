class GeneratorClass {

    squares;
    fields;
    targetSquare;
    targetSquareID;
    allowedInSquare;
    
    constructor() {
        console.log("Generator constructed");
        this.targetSquare = null;
        this.resetAllowedInSquare();
    }    

    startGeneration = () => {
        this.moveToSquare(0);
        this.iterateFields(true);
        this.resetAllowedInSquare();
        this.moveToSquare(4);
        this.iterateFields(true);
        this.resetAllowedInSquare();
        this.moveToSquare(8);
        this.iterateFields(true);
        this.resetAllowedInSquare();
        this.moveToSquare(1);
        this.getNeighbourValues(false);
    }

    getNeighbourValues = () => {
        let squares = new Array();
        this.targetSquare.neighbourSquares.forEach((square, squareID) => {
            let values = new Array({ horizontal: new Array(3), vertical: new Array(3) });          
            let valuesInRow = new Array();  
            
            for(let fieldID = 0; fieldID<9; fieldID++){
                let position = fieldID;
                console.log(position)
                values.push(this.fields[position].value);
            }
            squares.push(valuesInRow);
        })
        console.log(squares);
        return squares;
    }

    iterateFields = (doGenerate) => {
        [...this.targetSquare.squareElem.children].forEach((field, index) => {
            if(doGenerate === true){
                this.generateValues(index);
            } else if (doGenerate === false) {
                
            }         
        })
    }

    

    setSquaresAndFields = (squares, fields) => {
        this.squares = squares;
        this.fields = fields;
    }

    moveToSquare = (id) => {
        this.targetSquareID = id;
        this.targetSquare = this.squares[this.targetSquareID];
    }

    generateValues = (index) => {
        let allowedValue = this.allowedInSquare[this.getAllowedID(this.allowedInSquare.length)];
        let indexOfValue = this.allowedInSquare.indexOf(allowedValue);
        this.allowedInSquare.splice(indexOfValue, 1);
        this.fields[(9 * this.targetSquareID) + index].updateValue(allowedValue);
    }


    getAllowedID = (max) => Math.floor(Math.random() * max)

    resetAllowedInSquare = () => this.allowedInSquare  = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    toString = () => console.log(this);
}

export let GeneratorInstance = new  GeneratorClass();