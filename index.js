// function to add two numbers
function add(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

// main function
function main() {
  // get the arguments passed through command line
  const numbers = process.argv.slice(3);

  // check if both numbers are passed
  if (numbers.length !== 2) {
    console.error("ERROR: Please enter two numbers");
    return;
  }

  // add two numbers
  const result = add(numbers[0], numbers[1]);
  console.log(
    `The result of adding ${numbers[0]} and ${numbers[1]} is ${result}`
  );
}

// call main function
main();
