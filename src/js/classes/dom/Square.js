export class SquareClass
{
    squareElem;
    squareID;
    horPosition;
    verPosition;
    neighbourSquares;

    gridElem;
    squareClasses;
    fieldClasses;

    constructor(squareElem, squareID, gridElem, squareClasses, fieldClasses)
    {
        this.squareElem = squareElem;
        this.gridElem = gridElem;
        this.squareID = squareID;
        this.squareClasses = squareClasses;
        this.fieldClasses = fieldClasses;
        this.horPosition = this.squareID % 3;
        this.neighbourSquares = new Array();
        this.verPosition = Math.floor(this.squareID / 3);
        this.setNeighbourSquares();
    }

    setNeighbourSquares = () => {
        this.squareClasses.forEach((square, index) => {
            let horNeighbour = square.squareID % 3;
            let verNeighbour = Math.floor(index / 3);
            if(this.horPosition === horNeighbour || this.verPosition === verNeighbour) {
                this.neighbourSquares.push(square);
            }
        })
    }

    toString = () => {
        console.log(JSON.parse(JSON.stringify(this)));
        return JSON.parse(JSON.stringify(this));
    }
}