export class GeneratorClass {
    unblockedFields;
    squares;
    fields;

    constructor(squares, fields) {
        console.log("Generator constructed");
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
            console.log(this.fields[valueIndex])
        }
        console.log(valueMap)
        return valueMap;
    }


    iterateSquares = (valueMap) => {
        for(let squareCount=0; squareCount<9; squareCount++){
            console.log("\niterating new square");
            this.iterateFields(squareCount, valueMap);

        }
    }

    iterateFields = (squareCount, valueMap) => {
        for(let fieldCount=0; fieldCount<9; fieldCount++){
            console.log("%c[hmm] "+(valueMap[(((squareCount * 9) + (fieldCount + 3)) % 9)]), "color: orange")
            let globalFieldCount = (squareCount * 9) + fieldCount;
            let fieldClass = this.fields[globalFieldCount];
            console.log("iterating new field in square-"+squareCount)
            console.log(fieldClass);
        }
    }




    getRandomNumber = (max) => Math.floor(Math.random() * max)

    toString = () => console.log(this);
}