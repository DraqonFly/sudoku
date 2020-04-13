import "../scss/index.scss";
import {RendererInstance} from "./classes/core/Renderer";
import {GeneratorInstance} from "./classes/core/Generator";
import {EventHandlerInstance} from "./eventHandler";
import {VisualizerInstance} from "./classes/helper/Visualizer";

RendererInstance.renderGrid();

window.onDebugButtonClick = (param) => {
    EventHandlerInstance.onDebugButtonClick(param);
}

VisualizerInstance.setClasses(RendererInstance.squares, RendererInstance.fields);

GeneratorInstance.setSquaresAndFields(RendererInstance.squares, RendererInstance.fields); 
GeneratorInstance.startGeneration(); 

