// Function to check if values are of the same type
function isSameType(value1, value2) {
  // Check if both values are NaN
  if (isNaN(value1) && isNaN(value2)) {
    return true;
  }else if(isNaN(value1)){
	  return false ;
  } else if(isNaN(value2)){
	  return false ;
  }

  if (typeof value1 === typeof value2) {
  	return true ;
  }
	return false ;
}

let value1 = prompt("Enter the first value:");
let value2 = prompt("Enter the second value:");

alert(isSameType(value1, value2));
 