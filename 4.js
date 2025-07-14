function sommeInfinie() {
  let element = 0;
  for (let i = 0; i < arguments.length; i++) {
    element += arguments[i];
  }
  return element;
}

console.log(sommeInfinie(1, 2, 3, 4, 5));
