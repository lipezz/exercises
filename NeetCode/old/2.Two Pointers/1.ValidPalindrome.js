// Given a string s, return true if it is a palindrome, otherwise return false.
// A palindrome is a string that reads the same forward and backward. 
// It is also case-insensitive and ignores all non-alphanumeric characters.

isPalindrome = (s) => {

   const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase() // Remove non alphanumeric and change to lower case

   const reversed = cleaned.split('').reverse().join('') // Create a reversed version of the cleaned string

   console.log(cleaned)
   console.log(reversed)

   let ret = cleaned === reversed   // Compare both versions 

   return ret
}

console.log( isPalindrome('Was it a car or a cat I saw?') )

console.log( isPalindrome("tab a cat") )

console.log( isPalindrome("tab a bat") )