{
  // Block Scope
}

if (true) {
  // Block Scope
}

for (let i = 1; i <= 10; i++) {
  // Block Scope
}

function sum(a, b) {
  // Function Scope
  let result = a + b;
  return result;
}

console.log(sum(4,3));
