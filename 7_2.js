const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function crypter(word, key) {
  let cryptedWord = "";
  word = word.toLocaleLowerCase();
  word = word.split("");

  for (let i = 0; i < word.length; i++) {
    let index = alphabet.indexOf(word[i]);
    let newIndex;
    if (index + key <= 25) {
      newIndex = index + key;
      cryptedWord += alphabet[newIndex];
    } else if (index + key > 25) {
      newIndex = index + key - 26;
      cryptedWord += alphabet[newIndex];
    }
  }
  return cryptedWord;
}

function decrypter(word, key) {
    let cryptedWord = "";
    word = word.toLocaleLowerCase();
    word = word.split("");
  
    for (let i = 0; i < word.length; i++) {
      let index = alphabet.indexOf(word[i]);
      let newIndex;
      if (index - key >= 0) {
        newIndex = index - key;
        cryptedWord += alphabet[newIndex];
      } else if (index - key < 0) {
        newIndex = index - key + 26;
        cryptedWord += alphabet[newIndex];
      }
    }
    return cryptedWord;
    
}

const message = "zhmat";
const key = 3;

const cryptoGramme = crypter(message, key);
console.log(cryptoGramme);

const messageClaire = decrypter(cryptoGramme, 3);
console.log(messageClaire);

