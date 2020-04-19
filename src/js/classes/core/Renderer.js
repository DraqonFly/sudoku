import {SquareClass} from "../dom/Square.js";
import {FieldClass} from "../dom/Field.js";

class RendererClass 
{
    squares;
    fields;

    constructor() {
        this.squares = new Array();
        this.fields = new Array();
    }

    renderGrid = () => {
        console.log("%c[Renderer] Rendering Grid, Squares & Fields", "color: rgb(160, 180, 255)")
        let squareJSON = {
            nodeName: "div",
            classes: ["square", "grid"],
        }
        let fieldJSON = {
            nodeName: "div",
            textNode: "0",
            classes: ["field"],
        }
        for(let squareCount=0; squareCount<9; squareCount++){
            let squareElement = this.createElement(document.getElementById("grid"), squareJSON);
            this.getSquarePosition(squareCount);
            this.squares.push(new SquareClass(squareElement, squareCount, this.fields));

            for(let fieldCount=0; fieldCount<9; fieldCount++) {
                let fieldElement = this.createElement(document.getElementsByClassName("square")[squareCount], fieldJSON);
                this.fields.push(new FieldClass(fieldElement, fieldCount, squareCount))
            }
            this.squares[this.squares.length - 1].getOwnFields(this.fields);
        }
        for(let squareCount=0; squareCount < 9; squareCount++) this.squares[squareCount].setNeighbourSquares(this.squares);
    }

    getSquarePosition = (squareCount) => {
        switch(squareCount) {
            case 0: this.appendClasses(document.getElementsByClassName("square")[squareCount], ["square", "grid", "top left"]); break;
            case 1: this.appendClasses(document.getElementsByClassName("square")[squareCount], ["square", "grid", "top mid"]); break;
            case 2: this.appendClasses(document.getElementsByClassName("square")[squareCount], ["square", "grid", "top right"]); break; 
            case 3: this.appendClasses(document.getElementsByClassName("square")[squareCount], ["square", "grid", "center left"]); break;
            case 4: this.appendClasses(document.getElementsByClassName("square")[squareCount], ["square", "grid", "center mid"]); break;
            case 5: this.appendClasses(document.getElementsByClassName("square")[squareCount], ["square", "grid", "center right"]); break;
            case 6: this.appendClasses(document.getElementsByClassName("square")[squareCount], ["square", "grid", "bot left"]); break;
            case 7: this.appendClasses(document.getElementsByClassName("square")[squareCount], ["square", "grid", "bot mid"]); break;
            case 8: this.appendClasses(document.getElementsByClassName("square")[squareCount], ["square", "grid", "bot right"]); break;
        }
    }

    createElement = (parentElement, elementJSON) => {
        let element = document.createElement(elementJSON.nodeName);
        elementJSON.textNode ? this.createNode(element, elementJSON.textNode) : null;
        elementJSON.classes ? this.appendClasses(element, elementJSON.classes) : null;
        elementJSON.maxlength ? element.maxLength = elementJSON.maxlength : null;
        this.appendChild(parentElement, element);
        return element;
    }

    createNode = (element, text) => {
        let textNode = document.createTextNode(text);
        this.appendChild(element, textNode);
    }

    appendClasses = (element, classes) => element.classList = classes.join(" ");
    
    appendChild = (parent, child) => parent.appendChild(child);
    
    toString = () => {
        console.log(JSON.parse(JSON.stringify(this)));
        return JSON.parse(JSON.stringify(this));
    }
}

export let RendererInstance = new RendererClass();