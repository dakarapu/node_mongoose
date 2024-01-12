// learning event loop

setImmediate(() => console.log('Immediate'));
setTimeout(() => console.log('Timeout'), 0);

Promise.resolve().then(() => {
  console.log('Promise 0');
  process.nextTick(() => console.log('Next tick 2'));
  Promise.resolve().then(() => console.log('Promise 2'));
});

Promise.resolve().then(() => {
  console.log('Promise 1');
  Promise.resolve().then(() => console.log('Promise 3'));
  process.nextTick(() => console.log('Next tick 3'));
});

process.nextTick(() => {
  console.log('Next tick 0');
  process.nextTick(() => console.log('Next tick 4'));
  Promise.resolve().then(() => console.log('Promise 4'));
});

process.nextTick(() => {
  console.log('Next tick 1');
  Promise.resolve().then(() => console.log('Promise 5'));
  process.nextTick(() => console.log('Next tick 5'));
});

console.log('Hello world!');
