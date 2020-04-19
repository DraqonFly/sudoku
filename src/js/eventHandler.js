import {VisualizerInstance} from "./classes/helper/Visualizer";
import {SolverInstance} from "./classes/core/Solver";

class EventHandlerClass
{
    constructor() { }

    onDebugButtonClick = (param) => {
        switch(param) {
            case "squares": VisualizerInstance.visualizeNeighbourSquares(); break;
            case "digitsAll": VisualizerInstance.visualizeAllSameDigits(); break;
            default: this.changeButtonToggle(window.event.target)
        }
    }

    changeButtonToggle = (elem) => { 
        elem.classList.toggle("--active");
        console.log(elem.classList[3])
        if(elem.classList[3] === "--active"){
            elem.innerHTML = "Stop Debug Mode";
            document.getElementById("debugMenu").style.display = "block";
        } 
        else {
            elem.innerHTML = "Enter Debug Mode";
            document.getElementById("debugMenu").style.display = "none";
        }
    }
    
    toString = () => console.log(JSON.parse(JSON.stringify(this)));

    onSolutionButtonClick = () => SolverInstance.checkSolution();
}

export let EventHandlerInstance = new EventHandlerClass();