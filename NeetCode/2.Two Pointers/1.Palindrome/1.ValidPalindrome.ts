/*
Given a string s, return true if it is a palindrome, otherwise return false.
A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).
*/

const isPalindrome1 = (str:string):boolean => {

   let clean:string = ''                          // Create a string to store a cleaned, without non alphanumeric chars
   let str1:string = ''                           // Create a string to store the reversed version of the cleaned, for further comparation 

   for (let i = 0; i < str.length; i++) {         // Iterate through the input

      if(str[i] >= 'A' && str[i] <= 'Z' ||        // Check if the char is alphanumeric
         str[i] >= 'a' && str[i] <= 'z' ||
         str[i] >= '0' && str[i] <= '9' ) 
      
         clean += str[i].toLowerCase()            // Append the non alphanumeric char in lowercase => O(n) per append → total O(n²)
   }

   str1 = clean.split('').reverse().join('')      // Create a reversed version of the string
   
   return clean === str1                          // Return the result of the comparation of the reversed and the regular string
}


console.log(isPalindrome1('Was it a car or a cat I saw?'))   // true
console.log(isPalindrome1('A man, a plan, a canal: Panama')) // true
console.log(isPalindrome1("No lemon, no melon"))             // true
console.log(isPalindrome1('Ovo'))                            // true
console.log(isPalindrome1('not a palindrome'))               // false