export class SquareClass
{
    squareElem;
    squareID;
    horPosition;
    verPosition;

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
        this.verPosition = Math.floor(this.squareID / 3);
        console.log(this)
    }

    toString = () => {
        console.log(JSON.parse(JSON.stringify(this)));
        return JSON.parse(JSON.stringify(this));
    }
}