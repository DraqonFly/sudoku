class VisualizerClass
{
    squareClasses;
    fieldClasses;

    interval;
    intervalDuration;

    constructor()
    {

    }

    setClasses = (squareClasses, fieldClasses) => {
        this.squareClasses = squareClasses;
        this.fieldClasses = fieldClasses;
        this.intervalDuration = 1000;
    }

    visualizeAllSameDigits = () => {
        console.log("Visualizing all fields sharing a digit, one by one");
        let number = 0;
        this.interval = window.setInterval(() => {
            console.log("interval at "+number);
            
            this.fieldClasses.forEach(fieldClass => {
                console.log(fieldClass.fieldElem);
                if(parseInt(fieldClass.fieldElem.innerHTML, 10) === number) {
                    fieldClass.fieldElem.classList.toggle("focus");
                    console.log(number);
                } else if(fieldClass.fieldElem.classList[1] === "focus") {
                    fieldClass.fieldElem.classList.toggle("focus");
                }
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
            console.log(squareClass);

        

            console.log("target-hor: "+this.squareClasses[squareID].horPosition + "\ntarget-ver: "+this.squareClasses[squareID].verPosition +"\nhor: "+squareClass.horPosition+"\nver: "+squareClass.verPosition)

            if(squareClass.horPosition === this.squareClasses[squareID].horPosition || squareClass.verPosition === this.squareClasses[squareID].verPosition) {
                if(squareCount < squareID) {
                    squareClass.squareElem.classList.toggle("neighbour")
                    squareClass.squareElem.classList.toggle("green")
                    console.log("Respected Neighbour Found")
                } else if(squareCount.toString() !== squareID) {
                    squareClass.squareElem.classList.toggle("red")
                    squareClass.squareElem.classList.toggle("neighbour")
                    console.log("Ignored Neighbour Found")
                } else {
                    console.log("Target Element Found");
                }
            }
            
            if(squareCount === 8){
                window.clearInterval(this.interval);
            }
            squareCount++;
        }, this.intervalDuration)
    }

    toString = () => {
        console.log(JSON.parse(JSON.stringify(this)));
        return JSON.parse(JSON.stringify(this));
    }
}

export let VisualizerInstance = new VisualizerClass();