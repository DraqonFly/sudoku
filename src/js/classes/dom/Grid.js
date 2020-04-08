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
    
}

export let GridInstance = new GridClass(document.getElementById("grid"));
