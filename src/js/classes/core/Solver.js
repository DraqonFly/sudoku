import { RendererInstance } from "./Renderer";

class SolverClass {
    squares;
    fields;
    tokenfields;

    constructor(squares, fields) {
        this.squares = squares;
        this.fields = fields;
        this.tokenfields = new Array();
    }

    startSolving = () => {
        for (let i = 0; i < 9; i++) {
            console.log("%c[Solver] Remove Values and Solve Puzzle", "color: rgb(160, 180, 255)")
            let position = this.getRandomPosition();
            let field = this.squares[position.squareID].ownFields[position.fieldID];

            if (field) {
                let square = this.squares[position.squareID];
                field.transformField(false);
                this.bruteForceEmptyField(field, square);
            }
        }
    }

    checkSolution = () => {
        console.log("checking solution");
        this.toString();
        let doesntmatch = false;
        this.fields.forEach(field => {
            if (field.originalValue !== field.value) doesntmtch = true;
        })

        if (doesntmatch) {
            console.error("wrong answer")
            document.getElementById("wrong").style.display = "block";
            document.getElementById("correct").style.display = "none";
        } else {
            console.log("%csolved sudoku correctly", "color: green")
            document.getElementById("wrong").style.display = "none";
            document.getElementById("correct").style.display = "block";
        }
    }

    bruteForceEmptyField = (field, square) => {
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let allGivenValues = new Array();
        let connectedFields = this.getConnectedDigits(field, square);

        for (let i = 0; i < 8; i++) {
            if (connectedFields.hor[i].value !== undefined) allGivenValues.push(connectedFields.hor[i].value)
            if (connectedFields.ver[i].value !== undefined) allGivenValues.push(connectedFields.ver[i].value)
        }
        allGivenValues = allGivenValues.filter((v, i) => allGivenValues.indexOf(v) === i).sort();
        values.forEach(value => {
            let found = allGivenValues.indexOf(value);
            if (found === -1) {
                console.log("found number to insert: " + value)
                this.tokenfields.push(this.createSolution(field, value));
            }
        })
        //field.transformField(true);
    }

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
            if (iteratedField.verPosition === field.verPosition &&
                Math.floor(iteratedField.parentSquareID / 3) === Math.floor(square.squareID / 3)) {
                if (iteratedField !== field) connectedFields.hor.push(iteratedField)
            }
            else if (iteratedField.horPosition === field.horPosition &&
                iteratedField.parentSquareID % 3 === square.squareID % 3) {
                if (iteratedField !== field) connectedFields.ver.push(iteratedField)
            }
        })
        return connectedFields;
    }

    getRandomPosition = () => {
        let squareID = this.getRandomNumber(9);
        let fieldID = this.getRandomNumber(9);
        return { squareID: squareID, fieldID: fieldID };
    }

    getRandomNumber = (max) => Math.floor(Math.random() * max)

    toString = () => console.log(this)
}

export let SolverInstance = new SolverClass(RendererInstance.squares, RendererInstance.fields)