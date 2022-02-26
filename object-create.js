// using object literal way
const student = {
    name: "sakib al hasan",
    job: 'cricketer',
}

// using constructor 
const person = new Object();
console.log(person);

// unsing object.create method but parameter oboshsoy dite hobe evbae inheritance kaj korbe
// const human = Object.create(null);
const human = Object.create(student);

console.log(human.job);



//using a class for creating object
// ei class ke bole syntatical sugar karon eta upor e class holeo vitor e function hishasb e kaj kore 
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const peop = new People('manush', 12);
console.log(peop.name);



//using function
function Manus(name) {
    this.name = name;
}

const man = new Manus('kader');
console.log(man);




