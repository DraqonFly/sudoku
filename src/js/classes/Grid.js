class Grid
{
    size;
    elem;
    rows;

    constructor() {
        this.elem = document.getElementsByClassName("grid")[0];
    }

    generateGrid = () => {
        this.elem.innerHTML = "";
        for(let i=0; i<this.size; i++){
            this.elem.appendChild(this.createNode('row'));
            for(let o=0; o<this.size; o++) {
            document.getElementsByClassName('grid__row')[i].appendChild(this.createNode('item', i, o))
            }
        }
    }

    createNode = (type, i = null, o = null) => {
        if(type === 'row') {
        var node = document.createElement('DIV');
        node.classList.add('grid__row');
        } else if (type === 'item') {
            var node = document.createElement('DIV');
            var textnode = document.createTextNode('0');
            node.appendChild(textnode);
            node.classList.add("grid__item");
            node.classList.add("x"+i);
            node.classList.add("y"+o);
        }
        return node;
    }

    setSize = (size) => {
        this.size = size;
    }

    toString = (onlyReturn) => onlyReturn? JSON.parse(JSON.stringify(this)) : console.log(JSON.parse(JSON.stringify(this)))
}

export let grid = new Grid();