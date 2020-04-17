class GeneratorClass {
    elements;
    targetSquare;
    targetField;
    unblockedFields;

    constructor() {
        console.log("Generator constructed");
        this.targetSquare = null;
        this.targetField = null;
        this.unblockedFields = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    }
    
    startGeneration = () => {
        console.log("%c[Generator] Start Generation", "color: rgb(111, 150, 255)")
        this.generateNumberInCycle(1);
        this.generateNumberInCycle(2);
        this.generateNumberInCycle(3);
    }

    generateNumberInCycle = (cycleID) => {
        this.moveToSquare(0);
        let lastFieldPos = this.selectFieldFromFirstSquare();
        this.moveToField(cycleID);
        this.fillDigitIntoSquare(1);
        this.fillDigitIntoSquare(2);
        this.fillDigitIntoSquare(3);
        this.fillDigitIntoSquare(4);
        this.fillDigitIntoSquare(5);
        this.fillDigitIntoSquare(6);
        this.fillDigitIntoSquare(7);
        this.fillDigitIntoSquare(8);
    }
    
    
    setSquaresAndFields = (squares, fields) => {
        this.elements = {
            squares: squares,
            fields: fields
        }
    }
    
    selectFieldFromFirstSquare = () => {
        let fieldPosition = this.getRandomNumber(this.unblockedFields.length);

        let field = this.elements.fields[(this.targetSquare.squareID * 9) + this.unblockedFields[fieldPosition]];
        field.updateValue(this.unblockedFields[fieldPosition] + 1);
        
        
        this.unblockedFields.splice(this.unblockedFields.indexOf(this.unblockedFields[fieldPosition]), 1)
        console.log(this.unblockedFields)
        field.toString();
        return fieldPosition;
    }

    fillDigitIntoSquare = (squareID, pos) => {
        this.moveToSquare(squareID);
        let targetFieldCopy = JSON.parse(JSON.stringify(this.targetField));
        if(targetFieldCopy.value === 0) console.log("%cfill "+targetFieldCopy.value, "color: rgb(255, 120, 120)")
        else console.log("%cfill "+targetFieldCopy.value, "color: rgb(120, 210, 120)")
        
        if(squareID % 3 === 0 && squareID !== 0){
            this.moveToField(((targetFieldCopy.fieldID + 3) + 1) % 9);
        } else {
            this.moveToField((targetFieldCopy.fieldID + 3) % 9);
        }

        this.targetField.updateValue(targetFieldCopy.value);
    }
    
    moveToSquare = (id) => this.targetSquare = this.elements.squares[id];
    
    moveToField = (id) => this.targetField = this.elements.fields[(this.targetSquare.squareID * 9) + id];

    getRandomNumber = (max) => Math.floor(Math.random() * max)


    toString = () => console.log(this);
}

export let GeneratorInstance = new GeneratorClass();