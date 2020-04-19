import "../scss/index.scss";
import {RendererInstance} from "./classes/core/Renderer";
import {GeneratorClass} from "./classes/core/Generator";
import {SolverInstance} from "./classes/core/Solver";
import {EventHandlerInstance} from "./eventHandler";
import {VisualizerInstance} from "./classes/helper/Visualizer";

RendererInstance.renderGrid();
VisualizerInstance.setClasses(RendererInstance.squares, RendererInstance.fields);

let GeneratorInstance = new GeneratorClass(RendererInstance.squares, RendererInstance.fields)
GeneratorInstance.startGeneration(); 
SolverInstance.startSolving();

window.onDebugButtonClick = (param) => EventHandlerInstance.onDebugButtonClick(param);
window.onSolutionButtonClick = () => EventHandlerInstance.onSolutionButtonClick();