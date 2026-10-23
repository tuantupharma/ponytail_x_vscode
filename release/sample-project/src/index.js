const { sum } = require('./math');

function main() {
  const result = sum([1, 2, 3, 4, 5]);
  console.log(`Sum: ${result}`);
}

if (require.main === module) {
  main();
}

module.exports = { main };
