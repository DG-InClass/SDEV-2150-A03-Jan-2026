// node --watch array-functions.js
const log = console.log;

log('Understanding Array Functions');

// We'll build our own "mapper"

/**
 * myMapper illustrates the internal operations of the
 * native Array.map() method.
 * @param {(item, index, array) => any} callback
 * @returns {[]}
 */
const myMapper = function(callback) {
    // What's this? Uncomment the following line and see.
    // log(this);
    const results = [];
    const array = Array.from(this);
    for(var index in array) {
        const item = array[index];
        const singleResult = callback(item, index, array);
        results.push(singleResult);
    }
    return results;
}


// Attach myMapper to an array
const data = [1, 2, 3, 4, 5];
data.mapper = myMapper;

// Use my mapper
log(data.mapper((num) => num*2));
log(data.mapper(triple));
log('\nFixating on decimal positions...');
let result = data.mapper(fixations);
log(result);

function triple(value){
    return value * 3;
}

function fixations(value){
    const num = +value; // parseFloat(value)
    return num.toFixed(num);
}