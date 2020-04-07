import {grid as Grid} from "./Grid.js";

class GridDebugger
{
    size;
    elem;
    squares;
    target;

    constructor(size, elem, squares, target)
    {
        console.log("DEBUGGER CREATED")
        this.size = size;
        this.elem = elem;
        this.squares = squares;
        this.target = target;
    }

        // Visualize Each Group of Same Digits for 1 Second in Row.
        visualizeUniqueFields = () => {
            let loops = 0;
            let colors = ["#319921", "#6cfc55"]
            let interval = window.setInterval( () => {
                [...document.getElementsByClassName("grid__item")].forEach(item => {
                    if(item.innerHTML === loops.toString()) {
    
                        if(item.innerHTML === "0") {
                            item.style.color = "pink";
                            item.style.background = "rgb(220, 110, 90)";
                        } else {
                            item.style.color = colors[1];
                            item.style.background = colors[0];
                        }
    
                        if(loops === 9 ) window.setTimeout(() => window.clearInterval(interval), 1000)
                    } else {
                        if(item.style.color === "pink" ||item.style.color === "rgb(163, 147, 126)") {
                            item.style.background = "rgb(238, 185, 142)";
                            item.style.color =  "rgb(163, 147, 126)";
                        } else {
                            item.style.color = "black";
                            item.style.background = "#eb9c5c";
                        }
                    }
                })
                loops++;
            }, 1000)
        }
        
        visualizeSameRow = (targetSquare) => {
            targetSquare.style.background = "rgb(190, 110, 90)";
            targetSquare.style.color = "whitesmoke";
            
            let squareClass;
            this.squares.forEach((square, id) => {
                if(square.elem === targetSquare)
                squareClass = square;
            })
    
            let loops = 0;
            let colors = ["#319921", "#6cfc55"]
            let interval = window.setInterval( () => {
                if(this.squares[loops])
                if(this.squares[loops].elem === targetSquare ||loops >= squareClass.id) {
                    window.setTimeout( () =>{
    
                        console.warn("END")
                        this.squares.forEach((square, id) => {
                            if(id <= squareClass.id){
                                square.elem.style.background = "#eb9c5c";
                                square.elem.style.color = "black";
                            }
                        }, window.clearInterval(interval))
                    }, 3000)
                }
                else {
                    console.log("square-"+loops);
                    let horizontalNeighbourFound = ((squareClass.id % 3 >= loops % 3) && ((loops + 3) > squareClass.id) );
                    let verticalNeightbourFound = (squareClass.id % 3 === loops % 3);
                    if(horizontalNeighbourFound || verticalNeightbourFound) {
                        this.squares[loops].elem.style.background = "rgb(255, 110, 90)";
                        this.squares[loops].elem.style.color = "white";
                    }
                }
                loops++;
            }, 300)
        }
}

export let gridDebugger = new GridDebugger(Grid.size, Grid.elem, Grid.squares, Grid.target);