// Given an array of strings strs, group all anagrams together into sublists. 
// You may return the output in any order.
// An anagram is a string that contains the exact same characters as another string, 
// but the order of the characters can be different.

groupAnagrams = strs => {

   const map = new Map()  // Create a map to store the strings chars  

   for (let s of strs) {  // Iterate throught the array

      let sortedChars = s.split('').sort().join('')  // Create an alphabetical ordered char sequence

      if(!map.has(sortedChars))  // If the char group doesnt exist on the map
         map.set(sortedChars,[]) // Set a new key with an empty array

      map.get(sortedChars).push(s) // Push the related string to its key    
   }

   return Array.from(map.values())
   
}

const strs = ["eat","tea","tan","ate","nat","bat","tab"]

console.log(groupAnagrams(strs))