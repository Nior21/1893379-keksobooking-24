/**
 * Функция getRandomNumber() возвращает псевдослучайное положительное число с указанным уровнем точности
 * @param {number} min                  минимальное значение, которое может вернуть функция
 * @param {number} max                  максимальное значение, которое может вернуть функция
 * @param {number} numberDecimalPlaces  кол-во знаков после запятой у генерируемых чисел
 * @returns {number}                    возвращает число в диапазоне от 'min' до 'max' с указанным уровнем точности, либо undefined
 */
const getRandomNumber = function (min = 0, max = 100, numberDecimalPlaces = 0) {
  if (min > max) {
    throw new Error ( 'The minimum number at the input exceeds the maximum.' );
  }
  if (min < 0) {
    throw new Error ( 'Don\'t use negative number in input.' );
  }
  return Number ( (min + (Math.random () * (max - min))).toFixed ( numberDecimalPlaces ) );
};

/**
 * Функция getRandomArrayElement() возвращает случайный элемент из переданного массива
 * @param {array} elements входящий массив данных
 * @returns {string, *} возвращается случайный элемент массива (обычно строка)
 */
const getRandomArrayElement = (elements) =>
  elements[getRandomNumber(0, elements.length - 1)];

export { getRandomNumber, getRandomArrayElement };
