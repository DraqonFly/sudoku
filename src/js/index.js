import "../scss/index.scss";
import {grid as Grid} from "./classes/Grid.js";

window.load = () => {
    Grid.generateGrid();
    Grid.fillGrid();
}

window.onClick = (e, param) => {
    console.log("onclick")
    e = e ?? window.event;
    
    if(param === "visualizeUniqueDigits") {
        Grid.visualizeUniqueFields();
    }
    if(param === "visualizeSameRow") {
        Grid.visualizeSameRow(window.event.target.parentNode);
    }
}
