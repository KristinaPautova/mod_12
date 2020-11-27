// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
// Создать экземпляры каждого прибора;
// Вывести в консоль и посмотреть результаты работы, гордиться собой :)

function Machine(name){
    this.name = name,
        this.status = false,
        this.color = 'black'
}

Machine.prototype.setStatus = function(){
    this.status = this.status ? true : false;
}

function Lamp(name, color,status){
    this.name = name,
        this.color = color,
        this.status = status
}
Lamp.prototype = new Machine();

Lamp.prototype.getStatus = function(){
    if (!this.status){
        console.log('Не работает');
    } else {
        console.log(`${this.name} работает`);
    }
}

const includedLamp = new Lamp('Лампа', 'pink',true);
includedLamp.setStatus();
includedLamp.getStatus();


function Robot(name){
    this.name = name,
        this.cost = 999,
        this.color = 'blue'
};



PComputer.prototype = new Robot()

function PComputer(name,color){
    this.name = name,
    this.color = color
}

Robot.prototype.getWeight = function(cost){
    if(cost > 1000 ){
        console.log(`Дорого стоит ${this.color} ${this.name}` )
    } else {
        console.log(`Хорошая цена для ${this.name}`)
    }
}
PComputer.prototype.getWeight = function(cost){
    if(cost > 1000 ){
        console.log(`Дорого стоит ${this.color} ${this.name}` )
    } else {
        console.log(`Хорошая цена для ${this.name}`)
    }
}


const Tehnika = new Robot('Робота')
const Computer = new PComputer('компьютер', 'чёрный')
Computer.getWeight(2000);
Tehnika.getWeight()
console.log(includedLamp);
console.log(Computer);
console.log(Tehnika)

