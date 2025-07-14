function resoudre(a, b, x) {
  x = -b / a;
  a * x + b === 0;
  return x;
}

const s = resoudre(3, 12);
console.log(s);
