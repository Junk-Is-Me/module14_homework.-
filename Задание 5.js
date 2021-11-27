class ElectroDevice{
    constructor(name){
        this.name = name;
        this.isPlugged = false;
    }

 
    plugIn(){
         console.log(this.name + " is + plugged");
         this.isPlugged = true;
    }

    unPlug(){
        console.log(this.name + " is + unplugged");
        this.isPlugged = false;
    }
}

class Notebook extends ElectroDevice{
    constructor(brand, name, processorType, screenDiagonal, consumedEnergy){
        super(name);
        this.brand = brand;
        this.processorType = processorType;
        this.screenDiagonal = screenDiagonal;
        this.consumedEnergy = consumedEnergy;
        this.isPlugged = false
    }
}

class Television extends ElectroDevice{
    constructor(name, brand, screenDiagonal, consumedEnergy){
      super(name);
        this.name = name,
        this.brand = brand,
        this.screenDiagonal = screenDiagonal,
        this.consumedEnergy = consumedEnergy,
        this.isPlugged = false
    }
}

const lenovo = new Notebook("Notebook", "Lenovo", "Celeron", "17 inch", "80 Вт");
const samsung = new Television("Television", "Samsung", "45 inch", "70 Вт");

lenovo.plugIn();
samsung.plugIn();

console.log(lenovo);
console.log(samsung);
