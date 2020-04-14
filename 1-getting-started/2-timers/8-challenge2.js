// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
const timerId= setInterval(
  () => console.log('Hello World'),
  1000,
);

for (let i = 0; i < 0.5e0; i++) {
  // Block Node Synchronously

}
setTimeout(
  ()=> clearInterval(timerId),
  6000,
);
