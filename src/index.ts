import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 1, 4]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection.elements);
