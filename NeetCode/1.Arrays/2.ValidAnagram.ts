/*
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
*/

const isAnagram = (s:string, t:string):boolean => {
   
   let charFreq = new Map<string,number>()  //Create a map to store char frequency 

   if(s.length !== t.length) //If the strins have different lenghts they are not anagrams
      return false

   for (let char of s) { //Iterate through 1rst string
      
      if (charFreq.get(char) ?? 0 > 0)                     //If the char exists in the map / its frequency is greater than zero
         charFreq.set(char, (charFreq.get(char) ?? 0) + 1) //Increment its frequency
      else                                                 //If it does not exist
         charFreq.set(char, 1)                             //Start its frequency
   }

   for (let char of t) { //Iterate through 2nd string
      
      if (charFreq.get(char) ?? 0 > 0)                     //If the char exists in the map / its frequency is greater than zero
         charFreq.set(char, (charFreq.get(char) ?? 0) - 1) //Decrement its frequency
      else                                                 //If it does not exist
         return false                                      //The strings are not an anagram
   }

   return true
}

console.log(isAnagram("xxyy","yxxx"))