"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    // this way I don't have to call it as a function
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        if (this.data[leftIndex].toLocaleLowerCase() >
            this.data[rightIndex].toLocaleLowerCase())
            return true;
        return false;
    }
    swap(leftIndex, rightIndex) {
        const charArray = Array.from(this.data); // Convert the string to an array of characters
        [charArray[leftIndex], charArray[rightIndex]] = [
            charArray[rightIndex],
            charArray[leftIndex],
        ]; // Swap the elements
        this.data = charArray.toString().replace(/,/g, '');
    }
}
exports.CharactersCollection = CharactersCollection;
