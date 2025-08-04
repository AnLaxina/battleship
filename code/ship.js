export default class Ship {
  constructor(length) {
    this.length = length;
    this.amountOfTimesHit = 0;
    this.hasSunk = false;
  }

  hit(numberOfHits = 1) {
    this.amountOfTimesHit += numberOfHits;
  }
}
