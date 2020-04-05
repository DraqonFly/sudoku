import "../scss/index.scss";
import {grid as Grid} from "./classes/Grid.js";

console.log("hello world")

window.selectchange = () => {
    updateGridValue()
}
window.load = () => {
    updateGridValue()
}

function updateGridValue() {
    Grid.setSize(document.getElementsByName("gridSizeSelect")[0].value);
    Grid.generateGrid();
    Grid.toString();
}