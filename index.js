const add = require("./stringCalculator");

try {
  console.log(add(""));
  console.log(add("1,2,3"));
  console.log(add("1\n2,3"));
  console.log(add("10\n20\n30"));
  console.log(add("-5"));
  console.log(add("//;\n1;2"));
  console.log(add("//-\n5-1000-54"));
  console.log(add("//#\n2#4#6#8"));
} catch (error) {
  console.error(error.message);
}
try {
  console.log(add("9,6,8,5,9,5"));
  console.log(add("-10\n20\n30"));
  console.log(add("-5"));
} catch (error) {
  console.error(error.message);
}
