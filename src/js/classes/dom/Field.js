export class FieldClass
{
    fieldElem;
    fieldID;
    horPosition;
    verPosition;
    value;

    constructor(fieldElem, fieldID) {
        this.fieldElem = fieldElem;
        this.fieldID = fieldID;
        this.value = parseInt(this.fieldElem.innerHTML, 10);
        this.horPosition = this.fieldID % 3;
        this.verPosition = Math.floor(this.fieldID / 3);
    }

    updateValue = (value) => {
        this.value = value;
        this.fieldElem.innerHTML = value; 
    }

    toString = () => console.log(JSON.parse(JSON.stringify(this)));
}