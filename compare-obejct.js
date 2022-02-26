const first = {

    b: 2,
    a: 1,

}

const second = {
    a: 1,
    b: 2,
}

const third = first;

if (first == second) {
    console.log('objects are equal');
} else {
    console.log('objects are not equals');
}
if (first == third) {
    console.log('objects are equal');
} else {
    console.log('objects are not equals');
}

// way 1 of compareing differnt objects 
// but in this way all the order of properties should be same

console.log(JSON.stringify(first));
if (JSON.stringify(first) == JSON.stringify(second)) {
    console.log('objects are equal');
} else {
    console.log('objects are not equals');
}

// way 2 
// customly check object key and property with function 
function comapereObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}

console.log(comapereObjects(first, second));
