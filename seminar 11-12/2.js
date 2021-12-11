//задание 15
var c1 = ('Екатеринбург','Москва');
function Card(from, to){

    this.from = from;
    this.to = to;
    this.show = function(){
        return this.from, this.to;
    }
}
let card = new Card('Екатеринбург','Москва');
console.log(card.from, card.to);

//задание 16
let heightArray = []
class Human{
    #name;
    #age;
    #height;
    
    constructor(name,age,height){
        this.#name = name;
        this.#age = age;
        this.#height = height;
    }
    getInfo(){
        return `${this.#name}, ${this.#age}, ${this.#height}`;
    }
    get firstname(){
        return this.#name;
    }
    
    

}
let humans = [new Human ('Коля', 23, 180), new Human('Даша', 19, 170),
    new Human('Ванz', 18, 192), new Human('Петя', 45, 178), 
    new Human('Вася', 34, 197), new Human('Джони', 40, 168),
    new Human('Катя', 37, 160),new Human('Петя', 29, 200),
    new Human('Соня', 21, 172), new Human('Женя', 25, 175)];


for (let human of humans)
console.log(human.getInfo());



// задание 18
var date = new Date(2045, 0, 1, 0, 0, 0, 0)
dt1 = date
console.log(dt1);


//задание 19
var now = new Date();
var dt2 = now.getTime();
console.log(dt2)

//задание 20
function HowManyDays (month, year) { 
    return new Date(year, month, 0).getDate();
}
console.log(HowManyDays(12, 2021));