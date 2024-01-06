// Function to check if values are of the same type
function isSameType(value1, value2) {
    if ((isNaN(value1) && isNaN(value2)) && 
		typeof(value1) === typeof(value2)) {
        return true;
    }
    return false;
}

// User input using prompts
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Check if values are of the same type and display the result
alert(isSameType(value1, value2));
