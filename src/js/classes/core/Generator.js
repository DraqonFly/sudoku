class GeneratorClass {
    squares;
    fields;
    targetSquare; // current target (changes over generation)
    targetSquareID; // id used to change target and to travel time (recursively)

    constructor() {
        console.log("Generator constructed");
        this.targetSquare = null;
    }



    startGeneration = () => {
        console.log("%c[Generator] Start Generation", "color: rgb(111, 150, 255)")
        this.initalGeneration();
        this.moveToSquare(1);
        this.iterateFields(false);
        console.log(this.targetSquare)
    }
    


    initalGeneration = () => {
        console.log("%c[Generator] Initial 3 Fields Generation", "color: rgb(111, 150, 255)")
        let fieldID = 0;
        do {
            this.moveToSquare(fieldID);
            this.iterateFields(true);
            fieldID += 4;
        } while (fieldID < 9)
    }
    


    iterateFields = (doGenerate) => {
        console.log("%c[Generator] Field Iteration", "color: rgb(111, 150, 255)");
        [...this.targetSquare.squareElem.children].forEach((field, index) => {
            if (doGenerate === true) {
                this.generateValues(index);
            } 
            else if (doGenerate === false) {
                let neighbourSquareValues = this.targetSquare.getNeighbourValues();
                this.targetSquare.neighbourSquareValues = neighbourSquareValues;    

                this.targetSquare.removeNeighbourValuesFromAvailable();     
            }
        })
        
    }


    
    generateValues = (index) => {
        console.log("%c[Generator] Generating Values for Grid", "color: rgb(111, 150, 255)");
        let allowedValue = this.targetSquare.allowedInSquare[this.getAllowedID(this.targetSquare.allowedInSquare.length)];
        let indexOfValue = this.targetSquare.allowedInSquare.indexOf(allowedValue);
        this.targetSquare.allowedInSquare.splice(indexOfValue, 1);
        this.fields[(9 * this.targetSquareID) + index].updateValue(allowedValue);
        
    }












    //**********************************************************************************************************************//

    getAllowedID = (max) => Math.floor(Math.random() * max)

    setSquaresAndFields = (squares, fields) => {
        this.squares = squares;
        this.fields = fields;
    }

    moveToSquare = (id) => {
        this.targetSquareID = id;
        this.targetSquare = this.squares[this.targetSquareID];
    }

    toString = () => console.log(this);
}

export let GeneratorInstance = new GeneratorClass();