// #1.
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)      //? Prediction: 'Tesla'
console.log(otherRandomCar) //? Prediction: 'Mercedes'

//* Predictions were correct!

// #2.
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name);          //? Prediction: Error because we can't access name like this and it is renamed to otherName in the destructuring
console.log(otherName);     //? Prediction: 'Elon'

//* Predicitions were correct!

// 3.
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);          //? Prediction: '12345'
console.log(hashedPassword);    //? Prediction: Error because password is not located in the object.

//* Predictions were mostly right, hashedPassword came back as undefined, which makes perfect sense.

// 4.
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // 2
const [,,,second] = numbers; // 5
const [,,,,,,,,third] = numbers; // 2
//Predict the output
console.log(first == second); // 2 == 5 //? Prediction: False
console.log(first == third); // 2 == 2  //? Prediction: True

//* Predictions were correct!

// 5.
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);               //? Prediction: 'value'
console.log(secondKey);         //? Prediction: [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);      //? Prediction: 1
console.log(willThisWork);      //? Prediction: 5

//* Predictions were correct!