export class SquareClass
{
    squareID; // Index (iteration count) of current square as integer
    horPosition; // Rowcount (% 3) as integer
    verPosition; // Columncount (/ 3) as integer (Math.Floor)

    allowedInSquare; // All Digits allowed in a Square (one gets removed after being used)
    availableArr; // ! ! ! TODO: All Digits (but neighbourSquareValues removed)
    neighbourSquareValues; // All Horizontal and Vertical Digit Arrays of Neighbour Squares
    neighbourSquares; // All square javascript classes connected to this (only those being before this square)

    squareElem; // DOM element this square class is attached to
    gridElem; // DOM parent element this square class is attached to
    squareClasses; // All square javascript classes
    fieldClasses; // All field javascript jlasses

    constructor(squareElem, squareID, gridElem, squareClasses, fieldClasses)
    {
        this.neighbourSquares = new Array();

        // Assign ID and Position Data
        this.squareID = squareID;
        this.horPosition = this.squareID % 3;
        this.verPosition = Math.floor(this.squareID / 3);

        // get Elements and Classes
        this.squareElem = squareElem;
        this.gridElem = gridElem;
        this.squareClasses = squareClasses;
        this.fieldClasses = fieldClasses;
        this.setNeighbourSquares();


        this.setAvailableArrays(); // get digits from neighbour arrays
        this.setAllowedInSquare(); // get array from numbers with 1 to 9
    }



    removeNeighbourValuesFromAvailable = (neighbourvalues) => {
        console.log("%c[Square] Removing Neighbour Values from Available Array", "color: rgb(255, 110, 110)");
        console.log(this.availableArr)
        console.log(this.neighbourSquareValues)
        //TODO: Continue here
        // Remove all numbers in neighbour squares from the Available Array. its this json thing..
    }


    getNeighbourValues = () => {
        //console.log("\n")
        //console.log("%c[Square] Getting Values of Neighbour Squares ", "color: whitesmoke");

        // Iterating each neighbour square
        let squares = new Array();
        this.neighbourSquares.forEach((square, squareID) => {
            
            // Creating new Arrays for hor and ver neighbour values
            let values = { horizontal: new Array(3), vertical: new Array(3), total: new Array() };          
            for(let i=0; i<3; i++){
                values.horizontal[i] = new Array();
                values.vertical[i] = new Array();
            }

            // Loop through every field of the square
            for(let fieldID = 0; fieldID<9; fieldID++){

                // calculate fieldID/position and hor and ver position and push values to array
                let position = (9 * squareID) + fieldID;
                let hor = fieldID % 3;
                let ver = Math.floor(fieldID / 3);
                values.total.push(this.fieldClasses[position].value);
                values.horizontal[hor].push(this.fieldClasses[position].value);
                values.vertical[ver].push(this.fieldClasses[position].value);
            }
            //console.log(values)
            squares.push(values);
        })
        //console.log(squares)
        return squares;
    }













    // create vertical and horizontal 3x3 x2 arrays
    setAvailableArrays = () => {
        this.availableArr = {horizontal: new Array(3), vertical: new Array(3)}
        for(let i=0; i<3; i++){
            this.availableArr.horizontal[i] = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
            this.availableArr.vertical[i] = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
        }
    }

    // get neighbour square Classes
    setNeighbourSquares = () => {
        console.log("?")
        this.squareClasses.forEach((square, index) => {
            let horNeighbour = square.squareID % 3;
            let verNeighbour = Math.floor(index / 3);
            if(this.horPosition === horNeighbour || this.verPosition === verNeighbour) {
                this.neighbourSquares.push(square);
            }
        })
    }

    // set All Digits allowed in a Square
    setAllowedInSquare = () => 
        this.allowedInSquare  = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    toString = () => {
        console.log(JSON.parse(JSON.stringify(this)));
        return JSON.parse(JSON.stringify(this));
    }
}