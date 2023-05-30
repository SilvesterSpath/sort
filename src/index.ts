import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { Node } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 1, 4]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection.data);

const charactersCollection = new CharactersCollection('String');
const sorter2 = new Sorter(charactersCollection);
sorter2.sort();
console.log(sorter2.collection.data);

const node = new Node(1);
const linkedList = new LinkedList(node);
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sorter3 = new Sorter(linkedList);
sorter3.sort();
linkedList.print();
