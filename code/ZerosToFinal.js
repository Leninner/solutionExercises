/**
 *
 * @param {*} arr array of numbers
 * @returns {arr} array of numbers with zeros at the end
 */

const ZerosToFinal = (arr) => {
  let y = arr.length - 1;
  let aux = 0;
  let tope = arr.length;

  for (let i = 0; i < tope - 1; i++) {
    aux = arr[i];

    if (arr[i] === 0) {
      if (arr[y] === 0) y--;
      arr[i] = arr[y];
      arr[y] = aux;
      tope--;
      y--;
    }
  }

  return arr;
};

const ZerosToFinalRevisited = (arr) => {
  let k = 0;
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      k++;
    } else {
      newArray.push(arr[i]);
    }
  }

  return newArray.concat(new Array(k).fill(0));
};

console.log(ZerosToFinal([1, 2, 0, 5, 9, 0, 1, 2, 0]));
console.log(ZerosToFinalRevisited([1, 2, 0, 5, 9, 0, 1, 2, 0]));
