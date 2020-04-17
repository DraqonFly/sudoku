export class SquareClass
{
    squareID; // Index (iteration count) of current square as integer
    horPosition; // Rowcount (% 3) as integer
    verPosition; // Columncount (/ 3) as integer (Math.Floor)
    squareElem; // DOM element this square class is attached to

    constructor(squareElem, squareID) {
        this.squareElem = squareElem;
        this.squareID = squareID;
        this.horPosition = this.squareID % 3;
        this.verPosition = Math.floor(this.squareID / 3);
    }

    toString = () => console.log(JSON.parse(JSON.stringify(this)));
}