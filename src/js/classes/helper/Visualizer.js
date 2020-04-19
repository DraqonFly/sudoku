class VisualizerClass
{
    squareClasses;
    fieldClasses;
    interval;
    intervalDuration;

    constructor(){ }

    setClasses = (squareClasses, fieldClasses) => {
        this.squareClasses = squareClasses;
        this.fieldClasses = fieldClasses;
        this.intervalDuration = 1000;
    }

    visualizeAllSameDigits = () => {
        console.log("Visualizing all fields sharing a digit, one by one");
        let number = 0;
        this.interval = window.setInterval(() => {            
            this.fieldClasses.forEach(fieldClass => {
                if(parseInt(fieldClass.fieldElem.innerHTML, 10) === number) fieldClass.fieldElem.classList.toggle("focus");
                else if(fieldClass.fieldElem.classList[1] === "focus") fieldClass.fieldElem.classList.toggle("focus");
            })
            if(number === 9) window.clearInterval(this.interval);
            number++;
        }, this.intervalDuration)
    }
    
    visualizeNeighbourSquares = () => {
        let squareID = document.getElementById("squareSelect").value;
        let squareCount = 0;
        console.log("Visualizing square "+squareID+" and its neighbours")
        this.squareClasses[squareID].squareElem.classList.toggle("target");

        this.interval = window.setInterval(() => {
            let squareClass = this.squareClasses[squareCount];
            if(squareClass.horPosition === this.squareClasses[squareID].horPosition || squareClass.verPosition === this.squareClasses[squareID].verPosition) {
                if(squareCount < squareID || squareCount.toString() !== squareID) {
                    squareClass.squareElem.classList.toggle("neighbour")
                    squareClass.squareElem.classList.toggle("green")
                }
            }
            if(squareCount === 8) window.clearInterval(this.interval);
            
            squareCount++;
        }, this.intervalDuration)
    }

    toString = () => {
        console.log(JSON.parse(JSON.stringify(this)));
        return JSON.parse(JSON.stringify(this));
    }
}

export let VisualizerInstance = new VisualizerClass();