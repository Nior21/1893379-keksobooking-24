import { createAd } from './data';

const SIMILAR_AD_COUNT = 10;

Array.from ( {length: SIMILAR_AD_COUNT}, (value, id) => createAd(id + 1));
