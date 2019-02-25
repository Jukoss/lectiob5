function randomNumber(from, to) {
  return (Math.random()*(to -from + 1) + from).toFixed();
}

const emptyArray = [];

for (let i = 0; i < 100; i++) {
  emptyArray[i] = +randomNumber(0, 100);
}

console.log(emptyArray);

const notEmpty = emptyArray.filter(function(item) {
  return item % 2 === 0;
});

console.log(notEmpty);


const notEmptyMap = emptyArray.map(function(item) {
  return item * item;
});

console.log(notEmptyMap);



