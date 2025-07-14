function resoudre(a, b, c) {
  let s1;
  let s2;
  let d = b ** 2 - 4 * a * c;
  if (d === 0) {
    s1 = (-b / 2) * a;
    return s1;
  } else if (d > 0) {
    s1 = ((-b - Math.sqrt(d)) / 2) * a;
    s2 = ((-b + Math.sqrt(d)) / 2) * a;

    return { s1, s2 };
  } else {
    return "Pas de solution";
  }
}

console.log(resoudre(1, 2, 1));
console.log(resoudre(1, 4, 3));
console.log(resoudre(1, 2, 2));
