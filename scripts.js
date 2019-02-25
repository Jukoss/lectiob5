
function randomNumber(from, to) {
  return (Math.random()*(to -from + 1) + from).toFixed();
}

console.log(randomNumber(10, 20));
