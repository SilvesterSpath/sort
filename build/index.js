"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* import { Sorter } from './Sorter'; */
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 1, 4]);
/* const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection.data); */
numbersCollection.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection('String');
/* const sorter2 = new Sorter(charactersCollection);
sorter2.sort();
console.log(sorter2.collection.data); */
charactersCollection.sort();
console.log(charactersCollection.data);
const linkedList = new LinkedList_1.LinkedList(1);
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
/* const sorter3 = new Sorter(linkedList); */
/* sorter3.sort(); */
linkedList.sort();
linkedList.print();
