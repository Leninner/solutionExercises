import { vowelsAndConsonants } from '../code/vocalesYConsonantes';

xtest('Debe quitar todas las vocales que encuentre', () => {
  expect(vowelsAndConsonants('Lenin Mazabanda. ¿Cómo estás?')).toBe('Lnn Mzbnd. ¿Cm sts?');
  expect(vowelsAndConsonants('jkhekjakrjhkeahkljeahkl')).toBe('jkhkjkrjhkhkljhkl');
});
