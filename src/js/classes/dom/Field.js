import { RendererInstance } from "../core/Renderer";

export class FieldClass
{
    fieldElem;
    fieldID;
    originalValue;
    transformState;
    parentSquareID
    horPosition;
    verPosition;
    value;

    constructor(fieldElem, fieldID, parentSquareID) {
        this.fieldElem = fieldElem;
        this.parentSquareID = parentSquareID;
        this.transformState = false;
        this.fieldID = fieldID;
        this.value = parseInt(this.fieldElem.innerHTML, 10);
        this.originalValue = this.value;
        this.horPosition = this.fieldID % 3;
        this.verPosition = Math.floor(this.fieldID / 3);
     }

    updateValue = (value) => {
        if(value !== "") this.originalValue = value;
        this.value = value;
        this.fieldElem.innerHTML = value; 
    }

    updateReadValue = () => {
        this.value = parseInt(this.fieldElem.childNodes[0].value, 10);
    }

    transformField = (backwards) => {
        this.transformState = !this.transformState;
        if(backwards === false){
            let fieldJSON = {
                nodeName: "input",
                classes: ["input"],
                maxlength: "1"
            }
            this.updateValue("");
            this.fieldElem.classList.add("replace");
            RendererInstance.createElement(this.fieldElem, fieldJSON)
console.log(this.fieldElem.childNodes[0])
            
            this.fieldElem.childNodes[0].addEventListener("change", () => {
                this.updateReadValue();
            })
        } else {
            this.updateValue(this.originalValue);
            this.fieldElem.classList.remove("replace");
            console.log(this.originalValue)
        }
    }

    toString = () => console.log(JSON.parse(JSON.stringify(this)));
}