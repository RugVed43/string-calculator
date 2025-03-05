const add = require("./stringCalculator");

console.log(add(""));
console.log(add("1,2,3"));
console.log(add("1\n2,3"));
console.log(add("10\n20\n30"));
console.log(add("//;\n1;2"));
console.log(add("//-\n5-1000-54"));
console.log(add("//#\n2#4#6#8"));
