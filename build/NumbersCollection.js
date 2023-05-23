"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    // this way I don't have to call it as a function
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        if (this.data[leftIndex] > this.data[rightIndex])
            return true;
        return false;
    }
    swap(leftIndex, rightIndex) {
        const temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
    get elements() {
        return this.data;
    }
}
exports.NumbersCollection = NumbersCollection;
