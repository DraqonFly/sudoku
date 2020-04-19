import { RendererInstance } from "./Renderer";

class SolverClass {
    squares;
    fields;

    constructor(squares, fields) {
        this.squares = squares;
        this.fields = fields;
    }

    startSolving = () => {
        console.log("%c[Solver] Remove Values and Solve Puzzle", "color: rgb(160, 180, 255)")
        let position = this.getRandomPosition();
        let field = this.squares[position.squareID].ownFields[position.fieldID];
        let square = this.squares[position.squareID];

        console.log(position);
        console.log(this.squares[position.squareID].ownFields[position.fieldID])

        field.transformField(false);

        this.bruteForceEmptyField(field, square);

        // TODO: if only one possible answer, replace field with textbox
        
    }

    bruteForceEmptyField = (field, square) => {
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let allGivenValues = new Array();
        
        console.log("%chor: "+field.horPosition+"\nver: "+field.verPosition, "color: orange");
        
        let connectedFields = this.getConnectedDigits(field, square);
        console.log(connectedFields)
        
        for(let i=0; i<8; i++) allGivenValues.push(connectedFields.hor[i].value, connectedFields.ver[i].value,  connectedFields.square[i].value);
        allGivenValues = allGivenValues.filter((v,i) => allGivenValues.indexOf(v) === i).sort();
        
        console.log(allGivenValues)

        //TODO: check if value fills horizontally, verticially and in square
        values.forEach(value => {
            let found = allGivenValues.indexOf(value);
            if(found === -1) {
                console.log("found number to insert: "+ value)
            } 
        }) 
        //field.transformField(true);
    }

    // TODO: Use this function to store solutions
    createSolution = (field, value) => {
        let jsonSolution = {
            field: field,
            foundValue: value
        }
        return jsonSolution;
    }

    getConnectedDigits = (field, square) => {
        let connectedFields = {
            hor: new Array(),
            ver: new Array(),
            square: square.ownFields
        }
        connectedFields.square.splice(connectedFields.square.indexOf(field), 1)
        this.fields.forEach(iteratedField => {
            if(iteratedField.verPosition === field.verPosition && 
                Math.floor(iteratedField.parentSquareID / 3) === Math.floor(square.squareID / 3) ) {
                if(iteratedField !== field) connectedFields.hor.push(iteratedField)
            }
            else if(iteratedField.horPosition === field.horPosition && 
                iteratedField.parentSquareID % 3 === square.squareID % 3 ) {
                if(iteratedField !== field) connectedFields.ver.push(iteratedField)
            }
        })
        return connectedFields;
    }


    toString = () => console.log(JSON.parse(JSON.stringify(this)))

    getRandomPosition = () => {
        let squareID = this.getRandomNumber(9);
        let fieldID = this.getRandomNumber(9);
        return { squareID: squareID, fieldID: fieldID };
    }

    getRandomNumber = (max) => Math.floor(Math.random() * max)
}

export let SolverInstance = new SolverClass(RendererInstance.squares, RendererInstance.fields)