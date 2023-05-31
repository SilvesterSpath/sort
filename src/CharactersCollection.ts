import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  // this way I don't have to call it as a function
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (
      this.data[leftIndex].toLocaleLowerCase() >
      this.data[rightIndex].toLocaleLowerCase()
    )
      return true;
    return false;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const charArray = Array.from(this.data); // Convert the string to an array of characters
    [charArray[leftIndex], charArray[rightIndex]] = [
      charArray[rightIndex],
      charArray[leftIndex],
    ]; // Swap the elements

    this.data = charArray.toString().replace(/,/g, '');
  }
}
