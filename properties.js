const bottol = {
    // key:value pairing system, 
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true,
}

// to get all the properties names Object.keys 
console.log(Object.keys(bottol));

// to get all the values Object.values
const values = Object.values(bottol);
console.log(values);

// to get all the keys and values as a 2d array Object.entries
const pairs = Object.entries(bottol);
console.log(pairs);

//to delete one properties of the object we have to use 'delete objectname.propertyname'
delete bottol.isCleaned;
console.log(bottol);

// but if we want to seal our object which can not be deleted we have to use Object.seal(objectname)
// seal korle new property jog kora jay na shate delete ow kora jay na kintu update kora jay
// kintu Object.freeze(objectname) use korle delete insert update kisui kora jabe na 
Object.seal(bottol);
delete bottol.color;
console.log(bottol);



