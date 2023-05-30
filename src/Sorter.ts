import { Node } from './LinkedList';

interface Sortable {
  data: number[] | string | Node;
  length: number;
  swap: (left: number, right: number) => void;
  compare: (left: number, right: number) => boolean;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
