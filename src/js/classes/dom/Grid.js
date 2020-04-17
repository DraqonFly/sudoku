export class GridClass
{
    gridElem;

    constructor(gridElem) {
        this.gridElem = gridElem;
    }
    
    toString = () => console.log(JSON.parse(JSON.stringify(this)));
}

export let GridInstance = new GridClass(document.getElementById("grid"));
