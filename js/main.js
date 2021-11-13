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


/** ИНИЦИАЛИЗАЦИЯ ОБЪЕКТОВ **/

/**
 * Объект author — описывает автора.
 * avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.
 * @type {{avatar: *}}
 */
const Author = {
  avatar: `img/avatars/user${getRandomNumber(1, 10)}.png`,
};

/**
 * Объект offer — содержит информацию об объявлении.
 * @type {{features: string[], rooms: number, address: string, checkin: string, price: number, guests: number, description: string, title: string, type: string, checkout: string, photos: string[]}}
 */
const Offer = {
  title: '',
  address: '',
  price: getRandomNumber(1000, 1000000),
  type: '', // palace, flat, house, bungalow или hotel.
  rooms: getRandomNumber(1, 4),
  guests: getRandomNumber(1, 12),
  checkin: '', // одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
  checkout: '', // одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
  features: ['', '', ''], // массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
  description: '', // строка — описание помещения. Придумайте самостоятельно.
  photos: ['', '', ''], // массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.
};

/**
 * Объект location — местоположение в виде географических координат
 * @type {{lng: number, lat: number}}
 */
const Location = {
  lat: getRandomNumber(35.65000, 35.70000, 5), // число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.
  lng: getRandomNumber(139.70000, 139.80000, 5), // число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.
};


