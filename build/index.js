"use strict";
class Sorter {
    /*  collection: number[];
  
    constructor(collection: number[]) {
      this.collection = collection;
    } */
    //totally equivalent this line
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // All of this only works if collection is a number[]
                // If collection is an array of numbers
                if (this.collection instanceof Array) {
                    // collectin === number[]
                    if (this.collection[j] > this.collection[j + 1]) {
                        const temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
                // Only going to work if collection is a string
                // If collection is a string, do this logic instead:
                // ~~~logic to compare and swap characters in a string
                if (typeof this.collection === 'string') {
                    // collection === string
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
