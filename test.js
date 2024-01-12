// learning event loop

console.log('Hello => number 1');

setImmediate(() => {
  console.log('Running before the timeout => number 3');
  process.nextTick(() => {
    console.log('Running next tick from setImmediate');
  });
});

setTimeout(() => {
  console.log('The timeout running last => number 4');
  process.nextTick(() => {
    console.log('Running next tick from setTimeout');
  });
}, 0);

process.nextTick(() => {
  console.log('Running at next tick => number 2');

  setImmediate(() => {
    console.log('Running setImmediate from nextTick');
  });

  setTimeout(() => {
    console.log('Running setTimeout from nextTick');
  }, 0);
});
