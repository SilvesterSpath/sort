import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 1, 4]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection.data);

const charactersCollection = new CharactersCollection('string');
const sorter2 = new Sorter(charactersCollection);
sorter2.sort();
console.log(sorter2.collection.data);
