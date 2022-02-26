const bottol = {
    // key:value pairing system, 
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true,
};

//types of for loop
/*
for (let i = 0; i < 10; i++) {

}

for (const num of numbers) { // eta array er jonno

}

for (const prop in stundent) { // eta object er jonno use kora hoy

}
*/

// way 1 of looping object 
for (const prop in bottol) {
    // prop
    console.log(prop, bottol[prop]);
}


// way 2 of looping object 
const keys = Object.keys(bottol);
console.log(keys);
for (const key of keys) {
    console.log(key, bottol[key]);
}

// way 3 of looping values (advance)
const entries = Object.entries(bottol);
console.log(entries);
for (const [key, value] of Object.entries(bottol)) {
    console.log(key, value);
}