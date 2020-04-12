export class FieldClass
{
    fieldElem;
    fieldID;

    gridElem;
    squareElem;
    squareClasses;
    fieldClasses;

    constructor(fieldElem, fieldID, gridElem, squareElem, squareClasses, fieldClasses)
    {
        this.gridElem = gridElem;
        this.squareElem = squareElem;
        this.fieldElem = fieldElem;
        this.fieldID = fieldID;
        this.squareClasses = squareClasses;
        this.fieldClasses = fieldClasses;
        console.log(this)
    }

    toString = () => {
        console.log(JSON.parse(JSON.stringify(this)));
        return JSON.parse(JSON.stringify(this));
    }
}