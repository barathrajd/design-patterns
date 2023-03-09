// Singleton Example
// 1. Use as singleInstance and use as globle value
import singletonCounter from './src/Singleton';

document.querySelector('#red').addEventListener('click', () => {
  singletonCounter.increaseCount();
  // console.log(singletonCounter.getCount());
});

document.querySelector('#blue').addEventListener('click', () => {
  singletonCounter.increaseCount();
  // console.log(singletonCounter.getCount());
});
