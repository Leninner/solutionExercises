const twoSum = (arrayNumbers: number[], targetNumber: number): string | number[] => {
  let results: any = {};

  for (let i = 0; i < arrayNumbers.length; i++) {
    results[arrayNumbers[i]] = i;

    if (targetNumber - arrayNumbers[i] in results) {
      return [results[targetNumber - arrayNumbers[i]], i];
    }
  }

  return 'No se encontrĂ³ la suma';
};

console.log(twoSum([2, 7, 11, 15], 8)); // [0, 1]
