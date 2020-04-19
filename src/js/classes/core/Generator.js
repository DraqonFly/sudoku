export class GeneratorClass {
    unblockedFields;
    squares;
    fields;

    constructor(squares, fields) {
        this.squares = squares;
        this.fields = fields;
        this.unblockedFields = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    }
    
    startGeneration = () => {
        console.log("%c[Generator] Start Generation", "color: rgb(160, 180, 255)")
        let map = this.generate3x3Map();
        this.iterateSquares(map);
    }

    generate3x3Map = () => {
        let possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let valueMap = new Array();
        for(let fieldCount=0; fieldCount<9; fieldCount++){
            let valueIndex = possibleValues.indexOf(possibleValues[this.getRandomNumber(possibleValues.length)]);
            let value = possibleValues[valueIndex];
            valueMap.push(parseInt(possibleValues.splice(valueIndex, 1).join(" ")));
            this.fields[fieldCount].updateValue(value);
        }
        return valueMap;
    }

    getLast3x3Map = (squareCount) => {
        let valueMap = new Array();
        for(let fieldID=0; fieldID<9; fieldID++) valueMap.push(this.fields[(squareCount * 9) + fieldID].value);  
        return valueMap;
    }

    iterateSquares = (valueMap) => {
        for(let squareCount=0; squareCount<9; squareCount++){
            if(squareCount > 1) valueMap = this.getLast3x3Map(squareCount-1);
            if(squareCount >= 1) this.iterateFields(squareCount, valueMap);
        }
    }

    iterateFields = (squareCount, valueMap) => {
        let verticalShift = squareCount % 3 === 0;
        for(let fieldCount=0; fieldCount<9; fieldCount++){
            let globalFieldCount = (squareCount * 9) + fieldCount;
            let fieldClass = this.fields[globalFieldCount];
            if(verticalShift) fieldClass.updateValue(valueMap[((((squareCount * 9) + (fieldCount + 3) + 1)) % 9)])
            else fieldClass.updateValue(valueMap[(((squareCount * 9) + (fieldCount + 3)) % 9)])
        }
    }

    getRandomNumber = (max) => Math.floor(Math.random() * max)

    toString = () => console.log(this);
}