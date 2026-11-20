/*
Given a string s, return true if it is a palindrome, otherwise return false.
A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).
*/
const isAlphaNum2 = (c: string): boolean =>
  (c >= 'A' && c <= 'Z') ||
  (c >= 'a' && c <= 'z') ||
  (c >= '0' && c <= '9')

const isPalindrome4 = (str: string): boolean => {
  
  let left = 0                // Left pointer start of the input string
  let right = str.length - 1  // Right pointer end of the input string

  while (left < right) { // O(n) => Main loop runs at most once through the string, ensuring O(n) time complexity
  
   // Defining actual pointers for reading the input 

   while (left < right && !isAlphaNum2(str[left]))  left++   // Skip non-alphanumeric chars from the left - Increments left pointer if its non alpha 
   while (left < right && !isAlphaNum2(str[right])) right--  // Skip non-alphanumeric chars from the right - Decrease right pointer

   if (str[left].toLowerCase() !== str[right].toLowerCase()) // Read and compare directly from the input using the actual pointers 
      return false                                           // If chars are different at the same oposite positions input is not a palindrome
   
   left++                                                    // Increment counter - Move pointer to the next position
   right--                                                   // Decrease counter - Move pointer to the previous position
  }

  return true                                                // All chars are equally at the same oposite positions then input is a palindrome
}

console.log(isPalindrome4('Was it a car or a cat I saw?'))   // true
console.log(isPalindrome4('A man, a plan, a canal: Panama')) // true
console.log(isPalindrome4("No lemon, no melon"))             // true
console.log(isPalindrome4('Ovo'))                            // true
console.log(isPalindrome4('not a palindrome'))               // false