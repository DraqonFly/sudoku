import "../scss/index.scss";
import {grid as Grid} from "./classes/Grid.js";

window.load = () => {
    Grid.generateGrid();
    Grid.fillGrid();
}
