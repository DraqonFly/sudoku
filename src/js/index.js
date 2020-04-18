import "../scss/index.scss";
import {RendererInstance} from "./classes/core/Renderer";
import {GeneratorClass} from "./classes/core/Generator";
import {EventHandlerInstance} from "./eventHandler";
import {VisualizerInstance} from "./classes/helper/Visualizer";

RendererInstance.renderGrid();

window.onDebugButtonClick = (param) => {
    EventHandlerInstance.onDebugButtonClick(param);
}

VisualizerInstance.setClasses(RendererInstance.squares, RendererInstance.fields);

let GeneratorInstance = new GeneratorClass(RendererInstance.squares, RendererInstance.fields)
GeneratorInstance.startGeneration(); 

GeneratorInstance.toString();