export class FieldClass
{
    fieldElem;
    fieldID;
    value;

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
        this.value = parseInt(this.fieldElem.innerHTML, 10);
    }

    updateValue = (value) => {
        this.value = value;
        this.fieldElem.innerHTML = value; 
    }

    toString = () => {
        console.log(JSON.parse(JSON.stringify(this)));
        return JSON.parse(JSON.stringify(this));
    }
}