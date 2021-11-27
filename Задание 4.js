function ElectroDevice(name){
this.name = name,
this.isPlugged = false;
}

ElectroDevice.prototype.unPlug = function(){
    console.log(this.name + " is + unplugged");
    this.isPlugged = false;
};

ElectroDevice.prototype.plugIn = function(){
    console.log(this.name + " is + plugged");
    this.isPlugged = true;
};

function Notebook(name, brand, processorType, screenDiagonal, consumedEnergy){
    this.name = name,
    this.brand = brand,
    this.processorType = processorType,
    this.screenDiagonal = screenDiagonal,
    this.consumedEnergy = consumedEnergy,
    this.isPlugged = false
}

function Television(name, brand, screenDiagonal, consumedEnergy){
    this.name = name,
    this.brand = brand,
    this.screenDiagonal = screenDiagonal,
    this.consumedEnergy = consumedEnergy,
    this.isPlugged = false
}

Notebook.prototype = new ElectroDevice()
Television.prototype = new ElectroDevice()

const lenovo = new Notebook("Notebook", "Lenovo", "Celeron", "17 inch", "80 Вт");
const samsung = new Television("Television", "Samsung", "45 inch", "70 Вт");

lenovo.plugIn();
samsung.plugIn();


console.log(lenovo);
console.log(samsung);
