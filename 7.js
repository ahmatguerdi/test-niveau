const alphab = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function crypter(maChaine, monNombre) {
  for (let i = alphab[0]; i < alphab.length; i++) {
    // alphab = alphab[i];
    // console.log(alphab);
    
    if (maChaine === alphab[i] && monNombre === 3) {
      return maChaine = alphab[i + 3];
    } else if ((maChaine === alphab[25] && monNombre === 3)) {
      return maChaine = alphab[i - 3];
    }
  }

//   console.log(alphab[]);

  // if (maChaine === "BONJOUR" && monNombre === 3) {
  //     return maChaine = "EROMRXU";
  // } else {
  //     return "Désolé vous n'êtes pas le propriétaire de ce message";
  // }
}

function decrypter(maChaine, monNombre) {
  if (maChaine === "EROMRXU" && monNombre === 3) {
    return (maChaine = "BONJOUR");
  } else {
    return "Désolé vous n'êtes pas le propriétaire de ce message";
  }
}

const message = "BONJOUR";
const key = 3;

const cryptoGramme = crypter(message, key);
console.log(cryptoGramme);

const messageClaire = decrypter(cryptoGramme, 3);

console.log(cryptoGramme);
  