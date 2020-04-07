import "../scss/index.scss";
import {grid as Grid} from "./classes/Grid.js";
import {gridDebugger as GridDebugger} from "./classes/GridDebugger.js";

    Grid.generateGrid();
    Grid.fillGrid();


window.onClick = (e, param) => {
    console.log("onclick")
    e = e ?? window.event;
    
    if(param === "visualizeUniqueDigits") {
        GridDebugger.visualizeUniqueFields();
    }
    if(param === "visualizeSameRow") {
        GridDebugger.visualizeSameRow(window.event.target.parentNode);
    }
}
