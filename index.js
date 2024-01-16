function isPalindrome(word) {
  return word===word.split('').reverse().join('');
  //   return "true";
  // }else{
  //   return "false";
  // }
  
}


/* 
  Add your pseudocode here
*/
//write function that will take string as Parameter
//within function have a condition checking if string is palindrome
//if string is palindrome return  true else return false

/*
  Add written explanation of your solution here
*/ //from the function
//.split() breaks the string into an array 
//.reverse() will reverse the broken array
//.join() will join the array into a string

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
