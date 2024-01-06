// Function to check if values are of the same type
function isSameType(value1, value2) {
  // Check if both values are NaN
  if (isNaN(value1) && isNaN(value2)) {
    return true;
  }

  // Check if the types are the same 
  if (typeof value1 === typeof value2) {
  	return true ;
  }
	return false ;
}

// User input using prompts
let value1 = prompt("Enter the first value:");
let value2 = prompt("Enter the second value:");

// Convert user input to appropriate types
value1 = isNaN(value1) ? value1 : parseInt(value1);
value2 = isNaN(value2) ? value2 : parseInt(value2);

// Check if values are of the same type and display the result
alert(isSameType(value1, value2));
 