const list = [10, 40, 50, 70];

function randomNumber(array) {
  const arraysLength = array.length - 1;
  return (Math.random() * arraysLength).toFixed();
}

console.log(list[randomNumber(list)], 'index - ' + randomNumber(list))

// console.log(randomNumber(list));
