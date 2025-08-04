export default class Ship {
  constructor(length) {
    this.length = length;
    this.hitCount = 0;
    this.hasSunk = false;
  }

  hit(numberOfHits = 1) {
    this.hitCount += numberOfHits;
  }

  isSunk() {
    if (this.hitCount >= this.length) {
      this.hasSunk = true;
    }
    return this.hasSunk;
  }
}
