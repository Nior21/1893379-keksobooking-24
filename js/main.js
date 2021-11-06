/**
 * Функция getRandomNumber() возвращает псевдослучайное положительное число с указанным уровнем точности
 * @param {number} min                  минимальное значение, которое может вернуть функция
 * @param {number} max                  максимальное значение, которое может вернуть функция
 * @param {number} numberDecimalPlaces  кол-во знаков после запятой у генерируемых чисел
 * @returns {number}                    возвращает число в диапазоне от 'min' до 'max' с указанным уровнем точности, либо undefined
 */
const getRandomNumber = function (min = 0, max = 100, numberDecimalPlaces = 0) {
  if (min > max)  { throw new Error('The minimum number at the input exceeds the maximum.'); }
  if (min < 0)    { throw new Error('Don\'t use negative number in input.'); }
  return Number((min + (Math.random() * (max - min))).toFixed(numberDecimalPlaces));
};

getRandomNumber();
