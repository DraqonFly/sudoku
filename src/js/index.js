import "../scss/index.scss";
import {grid as Grid} from "./classes/Grid.js";

window.load = () => {
    Grid.generateGrid();
    Grid.fillGrid();
}

window.onClick = (param) => {
    if(param === "visualizeUniqueDigits") {
        Grid.visualizeUniqueFields();
    }
    if(param === "visualizeSameRow") {
        console.log("ya")
        Grid.visualizeSameRow();
    }
}
