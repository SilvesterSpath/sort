"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const sorter = new Sorter_1.Sorter(new NumbersCollection_1.NumbersCollection([10, 3, -5, 1, 4]));
sorter.sort();
console.log(sorter.collection);
