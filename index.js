const array1 = ["a", "b", "c", "d", "e", "f"];

// .forEach()
// cycles over an array and returns the individual element as parameter of the callback function.
array1.forEach(letter => console.log(letter + "1!!11"));

const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    const elem = array[i];

    callback(elem);
  }
};

const arrOfPeople = [
  { name: "Syed", age: 20, kudos: 580 },
  { name: "Raja", age: 16, kudos: 80 },
  { name: "Agris", age: 30, kudos: 120 },
  { name: "Harika", age: 22, kudos: 60 },
  { name: "Sweta", age: 26, kudos: 600 },
];

// .map()

// is a non mutating method that transforms the original element of an array and returns a NEW array with the result of the operation in the callback function (REMEMBER TO RETURN FROM THE CALLBACK FUNCTION)

const arrOfNum = [1, 3, 9, 5, 578, 0, 99, 2198];
const mappedElements = arrOfNum.map(num => num * 2);
const mappedElements2 = arrOfNum.map(num => ({ number: num * 2 }));
const listItems = arrOfNum.map(num => `<li> number: ${num} </li>`);

// const ul = null
// ul.innerHTML = listItems.join("")

console.log(listItems.join(""));

listItems.forEach(li => {
  console.log(li);
  // const ul = document.createELement("ul")
  // ul.appendChild(li)
});

const map = (array, callback) => {
  const mapped = [];

  for (let i = 0; i < array.length; i++) {
    const num = array[i];

    mapped.push(callback(num));
  }

  return mapped;
};

arrOfPeople.forEach((person, index, array) => {
  //   const span = document.createElement("span");
  //   span.innerText = "hello " + person.name;
  //   body.appendChild(span);

  console.log(index);
  console.log(array);
});

const names = arrOfPeople.map(person => person.name);
const ages = arrOfPeople.map(person => person.age);
const kudos = arrOfPeople.map(person => person.kudos);

console.log(names);
console.log(ages);
console.log(kudos);
// .findIndex()
// returns the index position of the first element that satifies the provided test in the callback function

const foundIndex = arrOfNum.findIndex(num => num <= 0);

const arrOfNumCopy = [...arrOfNum];
console.log(arrOfNumCopy.splice(foundIndex, 2, 10));
console.log(arrOfNumCopy);

console.log(arrOfNum[foundIndex]);

// .find()
// returns the first element that satifies the given condition, returns undefined if not present.
const age30 = arrOfPeople.find(person => person.age === 30);
console.log(age30.name);

// .includes()
// returns a boolean if the element is present in the collection

console.log(names.includes("Raja"));
console.log(ages.includes(26));

// .filter()
// checks the elements against a testing function, if the result is true, the element gets saved in a new array, otherwise it gets discarded

const filteredByAge = arrOfPeople.filter(person => person.age > 22);

const filter = (array, callback) => {
  const filteredElements = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (callback(element)) {
      filteredElements.push(element);
    }
  }

  return filteredElements;
};

console.log(filteredByAge);
console.log(arrOfPeople);

// .every()
// returns true if every element in the array satisfy the provided test, false if they are not all satifying that

console.log(arrOfPeople.every(person => person.kudos > 10));

// .some()
// returns true if at least one element satisfies the provided test

console.log(arrOfPeople.some(person => person.kudos <= 60));

// .fill()
// fills the original array with a specific element that you provide

const newArrOfPeople = [...arrOfPeople];
newArrOfPeople.fill({}, 2, 5);

console.log(newArrOfPeople);

// const obj = {
//     name: "Marios",
//     age: 20
// }

// delete obj.age
// obj = null
// console.log(obj)

// .slice()
// returns a slice of an array and doesn't mutate the original, returns a shallow copy of it.

const newArrOfPeopleSlice = arrOfPeople.slice();
console.log(newArrOfPeopleSlice);

// .sort()
// sorts the elements of an array based on a condition that you provide

console.log(arrOfNum.sort((a, b) => a - b));
console.log(arrOfPeople.sort((a, b) => a.age - b.age));
console.log(arrOfPeople.sort((a, b) => b.kudos - a.kudos).reverse());
console.log(arrOfPeople.sort((a, b) => (a.name > b.name ? 1 : -1)));

// .reduce()
// another way to cycle an array and produce a single value out of that operation.
console.log(arrOfNum);

const newArr = [3, 5, 7, 10];
console.log(
  newArr.reduce((accumulator, currentValue) => {
    accumulator;
    currentValue;
    return accumulator + currentValue;
  }, 0)
);

const shoppingCart = [
  { author: "John", title: "My book", price: 19 },
  { author: "John", title: "My second book", price: 49 },
  { author: "Alfred", title: "My first book", price: 9 },
  { author: "Martina", title: "My best book", price: 900 },
];

const reducedCart = shoppingCart.reduce((acc, curr) => acc + curr.price, 0);
console.log(reducedCart);

const reducedAgesSum = arrOfPeople.reduce((acc, curr) => acc + curr.age, 0);
// const reducedAgesArray = arrOfPeople.reduce((acc, curr) => {
//     acc
//     return acc.concat(curr.age)}, []);
const reducedAgesArray = arrOfPeople.reduce((acc, curr) => {
  acc;
  return [...acc, curr.age];
}, []);

console.log(reducedAgesArray.filter(num => num > 22));
