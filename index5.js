class Machine{
    constructor(name, color,status){
        this.name = name,
            this.status = status,
            this.color =  color ? color : 'black'
    }

    setStatus(){
        this.status = this.status ? true : false;
    }
}

class Lamp extends Machine{
    constructor(name, color,status){
        super(name, color,status);
    }

    getStatus(){
        if (!this.status){
            console.log('Не работает');
        } else {
            console.log(`${this.name} работает`);
        }
    }
}

const includedLamp = new Lamp('Лампа', 'pink', true );
includedLamp.setStatus();
includedLamp.getStatus();

////////////////////////

class Robot{
    constructor(name,color) {
        this.name = name,
            this.cost = 999,
            this.color = color ? color : 'blue'
    }
    getWeight(cost){
        if(cost > 1000 ){
            console.log(`Дорого стоит ${this.color} ${this.name}` )
        } else {
            console.log(`Хорошая цена для ${this.name}`)
        }
    }
};


class PComputer extends Robot {
    constructor(name, color) {
        super(name, color);
    }
      getWeight(cost){
        if(cost > 1000 ){
            console.log(`Дорого стоит ${this.color} ${this.name}` )
        } else {
            console.log(`Хорошая цена для ${this.name}`)
        }
    }
}


const Tehnika = new Robot('Робота', 'белый')
const Computer = new PComputer('компьютер', 'чёрный')
Computer.getWeight(2000);
Tehnika.getWeight()
console.log(includedLamp);
console.log(Computer);
console.log(Tehnika)