'use strict';
// Proxy Pattern
const person = {
  name: 'John Doe',
  age: 42,
  nationality: 'American',
};

// Method One
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },
  set: (obj, prop, value) => {
    console.log(
      `Change of ${prop} from ${obj[prop]} to ${value}`
    );
    obj[prop] = value;
    return true;
  },
});

personProxy.name;
personProxy.age = 100;

// Method 2
const secondPersonProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },
  set: (obj, prop, value) => {
    console.log(
      `Change of ${prop} from ${obj[prop]} to ${value}`
    );
    return Reflect.set(obj, prop, value);
  },
});

secondPersonProxy.name = 'Hello';
secondPersonProxy.age = 1;
