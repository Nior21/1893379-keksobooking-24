/**
 * Функция getRandomNumber() возвращает псевдослучайное положительное целое число
 * @param {number} min  мининимальное значение, которое может вернуть функция
 * @param {number} max  максимальное значение, которое может вернуть функция
 * @returns {number}    возвращает число в диапазоне от 'min' до 'max', либо undefined
 */
const getRandomNumber = (min=0, max=100) => {
  if (min < 0 || max < 0) {
    // eslint-disable-next-line no-console
    console.warn('Don\'t use negative number in input. А random number cannot be counted');
    return undefined;
  }
  if (min >= max) {
    // eslint-disable-next-line no-console
    console.warn('The minimum number at the input exceeds the maximum. А random number cannot be counted');
    return undefined;
  }
  return min + Math.floor(Math.random() * (max - min));
};

getRandomNumber();


/**
 * Функция getRandomFloatNumber() возвращает псевдослучайное положительное число с указаным уровнем точности
 * @param {number} min                  мининимальное значение, которое может вернуть функция
 * @param {number} max                  максимальное значение, которое может вернуть функция
 * @param {number} numberDecimalPlaces  кол-во знаков после запятой у генерируемых чисел
 * @returns {number}                    возвращает число в диапазоне от 'min' до 'max' с указанным уровнем точности, либо undefined
 */
const getRandomFloatNumber = function (min=0, max=100, numberDecimalPlaces=0) {
  if (min < 0 || max < 0) {
    // eslint-disable-next-line no-console
    console.warn('Don\'t use negative number in input. А random number cannot be counted');
    return undefined;
  }
  if (min >= max) {
    // eslint-disable-next-line no-console
    console.warn('The minimum number at the input exceeds the maximum. А random number cannot be counted');
    return undefined;
  }
  return Number((min + (Math.random() * (max - min))).toFixed(numberDecimalPlaces));
};

getRandomFloatNumber();
