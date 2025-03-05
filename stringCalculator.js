function add(numbers) {
  if (!numbers) return 0; // Return 0 for an empty string

  const numArray = numbers.split(",").map(Number); // Convert string to array of numbers

  return numArray.reduce((sum, num) => sum + num, 0); // Sum the numbers
}

module.exports = add;
