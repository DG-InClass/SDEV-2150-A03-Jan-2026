// In the same folder as this file, run the following in the terminal:
//      node --watch obj-ref.js

let person = {
    name: 'Stewart Dent',
    age: 22
};

// References (points to) the SAME object as person
let enrolled = person; // NOT a copy of everything inside person
const phil = 'Phil Errup';
console.log('Person Object:', person, '\nEnrolled Object:', enrolled);
console.log(`\nChanging Enrolled object's name to: ${phil}\n`);
enrolled.name = phil;
console.log('Person Object:', person, '\nEnrolled Object:', enrolled);


console.log();
// Primitive types are "copied"
// when assigning to new variables
let teacher = "Dan Gilleland";
let tutor = teacher; // An actual copy of the string
console.log(teacher, tutor);
tutor = "Anna Lyst"; // Changing tutor does NOT affect teacher
console.log(teacher, tutor);

// Time to draw some pictures on https://excalidraw.com/

