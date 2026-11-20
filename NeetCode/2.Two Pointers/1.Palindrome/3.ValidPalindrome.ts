/*
Given a string s, return true if it is a palindrome, otherwise return false.
A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).
*/

const isAlphaNum = (c:string):boolean =>
  (c >= 'A' && c <= 'Z') ||
  (c >= 'a' && c <= 'z') ||
  (c >= '0' && c <= '9')

const isPalindrome3 = (str:string):boolean => {

   let clean:string[] = []                        // Create an array to store the cleaned version of the string without possible alphanumeric chars    
   
   for (let i = 0; i < str.length; i++)           // Iterate through the input
      if (isAlphaNum(str[i]))                     // If its an alphanumeric char      
         clean.push(str[i].toLowerCase())         // Append the non alphanumeric char in lowercase => O(1) per push → total O(n)
   
   let left = 0                                   // Create a left pointer
   let right = clean.length - 1                   // Create the 'right' pointer

   while ( left < right ) {
      if(clean[left] != clean[right])
         return false
      left++
      right--      
   }
   return true
}

console.log(isPalindrome3('Was it a car or a cat I saw?'))   // true
console.log(isPalindrome3('A man, a plan, a canal: Panama')) // true
console.log(isPalindrome3("No lemon, no melon"))             // true
console.log(isPalindrome3('Ovo'))                            // true
console.log(isPalindrome3('not a palindrome'))               // false