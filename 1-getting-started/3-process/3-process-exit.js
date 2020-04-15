setTimeout(() => process.exit(), 4000);

process.on('exit', () => {
  console.log('Process will exit now. See you later!');
});

console.log('Hello!');
console.log('Process will exit in 4 seconds.');
