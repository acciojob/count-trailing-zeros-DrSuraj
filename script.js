function trailingZeros(n) {
  // Initialize count of trailing zeros
  let count = 0;

  // Keep dividing n by powers of 5 and update count
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }

  return count;
}

const input = prompt("Enter a number");
alert(trailingZeros(parseInt(input)));
