import {RendererInstance} from "../core/Renderer";

export class SquareClass
{
    squareID;
    ownFields;
    ownNeighbours;
    horPosition;
    verPosition;
    squareElem;

    constructor(squareElem, squareID) {
        this.squareElem = squareElem;
        this.squareID = squareID;
        this.horPosition = this.squareID % 3;
        this.ownNeighbours = new Array();
        this.verPosition = Math.floor(this.squareID / 3);
    }
    
    getOwnFields = (fieldsParam) => {
        let fields = new Array();
        for(let fieldID = 0; fieldID < 9; fieldID++)  fields.push(fieldsParam[(this.squareID * 9) + fieldID])
        this.ownFields = fields;
    }
    
    setNeighbourSquares = (squares) => {
        squares.forEach(squareClass => {
            if(squareClass.horPosition === this.horPosition || squareClass.verPosition === this.verPosition) {
                if((squareClass.horPosition === this.horPosition && squareClass.verPosition === this.verPosition) === false) this.ownNeighbours.push(squareClass)
            }
        })
        this.toString();        
    }

    toString = () => console.log(this);
}