'use strict';
let counter = 0;
let instance;
class Counter {
  constructor() {
    if (instance) {
      throw new Error('One Instance');
    }
    instance = this;
  }
  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increaseCount() {
    return ++counter;
  }

  decreseCOunt() {
    return --counter;
  }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;

console.log(counter);
