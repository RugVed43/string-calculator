function add(numbers) {
  if (!numbers) return 0; // Return 0 for an empty string

  let delimiter = /,|\n/;

  //   Check for custom delimiter
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    numbers = parts.slice(1).join("\n");
  }

  const numArray = numbers.split(delimiter).map(Number);
  // Check for negative numbers
  const negatives = numArray.filter((n) => n < 0);
  if (negatives.length) {
    throw new Error(
      `Negative numbers are not allowed: ${negatives.join(", ")}`
    );
  }
  //   console.log("🚀 ~ add ~ delimiter:", delimiter);
  //   console.log("🚀 ~ add ~ numbers:", numbers);
  //   console.log("🚀 ~ add ~ numArray:", numArray);

  return numArray.reduce((sum, num) => sum + num, 0); // Sum the numbers
}

module.exports = add;
