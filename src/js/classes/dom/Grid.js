export class GridClass
{
    gridElem;
    
    squareClasses;
    fieldClasses;

    constructor(gridElem, squareClasses, fieldClasses)
    {
        this.gridElem = gridElem;
        this.squareClasses = squareClasses;
        this.fieldClasses = fieldClasses;
        console.log(this)
    }
    
    toString = () => {
        console.log(JSON.parse(JSON.stringify(this)));
        return JSON.parse(JSON.stringify(this));
    }
}

export let GridInstance = new GridClass(document.getElementById("grid"));
