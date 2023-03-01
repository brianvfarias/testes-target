let nome = "Brian Farias";

function invertString(str: string) {
  let inverseString = str.split("").reverse().join("");
  return inverseString;
}

console.log(invertString(nome));