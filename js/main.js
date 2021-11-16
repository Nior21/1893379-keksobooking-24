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
  'Cur rumor cantare"',
  'Nunquam promissio lura"',
  'Nunquam amor orexis"',
  'Cur homo unda"',
  'Cur lapsus studere"',
  'Nunquam fallere ventus"',
  'Nunquam locus valebat"',
  'Nunquam resuscitabo glos"',
  'Cur abaculus trabem"',
  'Cur poeta potus"'];
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
const DESCRIPTION = [
  'Ubi est superbus nix? Classiss sunt brabeutas de raptus competition. Sunt medicinaes pugna festus, albus animalises. Altus olla foris quaestios gabalium est. Cum luna cantare, omnes boreases demitto ferox, varius lumenes.',
  'Vigil de bassus tabes, imperium stella! Cum castor persuadere, omnes burguses imitari placidus, magnum parmaes. Ecce, peritus vortex! Decor de alter fermium, vitare epos! Sunt onuses talem peritus, pius exsules.',
  'Particula de pius tus, demitto idoleum! Cum abactus peregrinatione, omnes scutumes promissio festus, gratis domuses. Cannabiss resistere in neuter hortus! Altus, grandis visuss solite examinare de neuter, alter capio.',
  'Diatria, ionicis tormento, et visus. Cum deus unda, omnes urbses imperium alter, bi-color fluctuies. Ecce, coordinatae! Cur palus manducare? Messis velox ducunt ad nobilis mortem. Brodium de mirabilis vortex, examinare xiphias.',
  'Secundus brodium absolute gratias cacula est. Ubi est noster bubo? A falsis, amicitia nobilis homo. Secundus visus etiam vitares resistentia est. Peritus, clemens seculas sensim carpseris de secundus, varius abaculus.',
  'Bulla festus repressor est. Ubi est bassus medicina? Hilotaes favere in infernum! Cum bubo nocere, omnes finises magicae neuter, festus lacteaes. Cum lamia ortum, omnes calcariaes perdere azureus, superbus bullaes.',
  'Repressor talis index est. Nunquam imperium mineralis. Elogiums manducare, tanquam peritus olla. Indictio de altus mens, imperium eleates! A falsis, palus brevis rumor. Dexter, rusticus nixuss tandem imperium de brevis, neuter elevatus.',
  'Palus, detrius, et abaculus. Pol, a bene calceus, victrix! Devatios trabem, tanquam barbatus guttus. Itineris tramitems ortum in revalia! Sunt nixuses tractare regius, audax decores. Regius vox patienter desideriums idoleum est.',
  'Fortiss mori in amivadum! Est lotus advena, cesaris. Cum mens cadunt, omnes fortises acquirere ferox, mirabilis ventuses. Detriuss assimilant, tanquam brevis amicitia. Pius, germanus gabaliums solite contactus de albus, ferox turpis.',
  'Lapsus de talis rumor, perdere bulla! Ubi est germanus index? A falsis, aonides domesticus visus. Armarium bassus triticum est. Fiscinas studere, tanquam germanus fuga. Zetas sunt eleatess de fortis axona.'];
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
 * @param {number} id порядковый номер создаваемого объекта в массиве
 * @returns {{Offer: {features: string[], rooms: number, address: `${number}, ${number}`, checkin: *, price: number, guests: number, description: *, title: string, type: *, checkout: *, photos: string[]}, Author: {avatar: string}, Location: {lng: number, lat: number}}}
 */
const createAd = function (id) {
  const lat = getRandomNumber(35.65000, 35.70000, 5);
  const lng = getRandomNumber(139.70000, 139.80000, 5);

  return {
    Author: {
      avatar: `img/avatars/user${ id < 10 ? `0${ id }` : id }.png`,
    },
    Offer: {
      'title': TITLES[id],
      'address': `${lat}, ${lng}`,
      'price': getRandomNumber(1000, 1000000),
      'type': getRandomArrayElement(TYPES),
      'rooms': getRandomNumber(1, 4),
      'guests': getRandomNumber(1, 12),
      'checkin': getRandomArrayElement(CHECKINS),
      'checkout': getRandomArrayElement(CHECKOUTS),
      'features': FEATURES.filter(() => getRandomNumber(0, 1), 0),
      'description': DESCRIPTION[id],
      'photos': PHOTOS.filter(() => getRandomNumber(0, 1), 0),
    },
    Location: {
      lat,
      lng,
    },
  };
};

/** ГЕРЕНИРУЕМ И ВЫВОДИМ СОЗДАННЫЕ ОБЪЕКТЫ */
/**const ads = */Array.from ( {length: 10}, (value, id) => createAd(id + 1));

//console.log(ads);
