// A function that takes a number and multiplies it by 2
function multiplyByTwo(num) {
    // Validate input to ensure it is a number
    if (isNaN(num)) {
      console.error("Input is not a number.");
      return;
    }
    
    // Perform multiplication
    const result = num * 2;
  
    // Return the result
    return result;
  }
  
  // Example usage
  const input = prompt("Enter a number to multiply by 2:");
  const result = multiplyByTwo(input);
  if (result !== undefined) {
    console.log(`The result of multiplying ${input} by 2 is: ${result}`);
  }
  
