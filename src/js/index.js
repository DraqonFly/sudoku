import "../scss/index.scss";
import {RendererInstance} from "./classes/core/Renderer";
import {EventHandlerInstance} from "./eventHandler";
import {VisualizerInstance} from "./classes/helper/Visualizer";

RendererInstance.renderGrid();
console.log(RendererInstance.fields)

window.onDebugButtonClick = (param) => {
    EventHandlerInstance.onDebugButtonClick(param);
}

VisualizerInstance.setClasses(RendererInstance.squares, RendererInstance.fields)