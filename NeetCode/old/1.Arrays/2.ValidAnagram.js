// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

isAnagram = (s,t) => {

   if(s.lenght !== t.lenght)  // If the strings lenght is not the same they are not an anagram
      return false

   let freqMap = new Map()   // Create a Map to store our key values

   for (let char of s) {     // Iterate the 1st string and check our Map for the char frequency

      if(freqMap[char])      // If the char exists in the map
         freqMap[char]++     // Increment its frequency
      else                   // If it does not exist in the map 
         freqMap[char] = 1   // Start its counter
   }

   for (let char of t) {     // Iterate the 2nd string and check our Map for the char frequency

      if(freqMap[char])      // If the char exists in the map
         freqMap[char]--     // Decrement its frequency
      else                   // If the char isnt on our map 
         return false        // Its not an anagram 
   }

   return true
}

console.log(isAnagram('tops','soap'))