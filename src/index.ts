import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const sorter = new Sorter(new NumbersCollection([10, 3, -5, 1, 4]));
sorter.sort();
console.log(sorter.collection);
