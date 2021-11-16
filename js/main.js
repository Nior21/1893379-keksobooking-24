/** ИНИЦИИРУЕМ ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ */
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


/** ИНИЦИАЛИЗИРУЕМ КОНСТАНТНЫЕ ОБЪЕКТЫ */
const TITLES = [
  'На 7 подушке от счастья',
  'Шерстяная долина',
  'Рыбная вечеринка',
  'Сливочное наслаждение',
  'Теплое место',
  'Уютная коробка',
  'Большой улов',
  'Дерзкий и ушастый',
  '9 жизней',
  'После стирки'];
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'];
const CHECKINS = [
  '12:00',
  '13:00',
  '14:00'];
const CHECKOUTS  = [
  '12:00',
  '13:00',
  '14:00'];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'];
const DESCRIPTION = [];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

/**
 * Функция getRandomArrayElement() возвращает случайный элемент из переданного массива
 * @param {array} elements входящий массив данных
 * @returns {string, *} возвращается случайный элемент массива (обычно строка)
 */
const getRandomArrayElement = (elements) =>
  elements[getRandomNumber(0, elements.length - 1)];

/**
 * Функция createAd() генерирует новое объявление
 * @param id
 * @returns {{Offer: {features: string[], rooms: number, address: string, checkin: string, price: number, guests: number, description: string, title: string, type: string, checkout: string, photos: string[]}, Author: {avatar: *}, getTestData(*): *, Location: {lng: number, lat: number}}}
 */
const createAd = function (id) {
  const lat = getRandomNumber(35.65000, 35.70000, 5);
  const lng = getRandomNumber(139.70000, 139.80000, 5);


  return {
    /**
     * Объект author — описывает автора.
     * avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.
     * @type {{avatar: *}}
     */
    Author: {
      avatar: `img/avatars/user${ id < 10 ? `0${ id }` : id }.png`,
    },

    /**
     * Объект offer — содержит информацию об объявлении.
     * @type {{features: string[], rooms: number, address: string, checkin: string, price: number, guests: number, description: string, title: string, type: string, checkout: string, photos: string[]}}
     */
    Offer: {
      'title': TITLES[id],
      'address': `${lat}, ${lng}`,
      'price': getRandomNumber(1000, 1000000),
      'type': getRandomArrayElement(TYPES),
      'rooms': getRandomNumber(1, 4),
      'guests': getRandomNumber(1, 12),
      'checkin': getRandomArrayElement(CHECKINS),
      'checkout': getRandomArrayElement(CHECKOUTS),
      'features': ['', '', ''], // массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
      'description': '', // строка — описание помещения. Придумайте самостоятельно.
      'photos': ['', '', ''], // массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.
    },

    /**
     * Объект location — местоположение в виде географических координат
     * @type {{lng: number, lat: number}}
     */
    Location: {
      lat: 0.00000, // getRandomNumber(35.65000, 35.70000, 5), // число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.
      lng: 0.00000, // getRandomNumber(139.70000, 139.80000, 5), // число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.
    },
  };
};

/** ГЕРЕНИРУЕМ И ВЫВОДИМ СОЗДАННЫЕ ОБЪЕКТЫ */
const ads = Array.from ( {length: 4}, (value, id) => createAd(id + 1));
