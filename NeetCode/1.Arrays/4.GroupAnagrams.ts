/*
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
*/

const groupAnagrams = (strs:string[]):string[][] => {

   let ret:string[][]                            //Create an array of array of strings to save the results 

   let charMap = new Map<string,string[]>()      //Create a map to store the char sequences and their belonging words

   for (const s of strs) {                       //Iterate through the input

      let charSeq = s.split('').sort().join('')  //Get the unordered chars from the word to use as key

      if (!charMap.has(charSeq))                 //If the map does not have this key
         charMap.set(charSeq,[])                 //Add the key to the map with an empty array to store all words that belong  
      
      charMap.get(charSeq)!.push(s)              //Add the word to its key
   }
   
   return Array.from(charMap.values())
}

const strs = ["act","pots","tops","cat","stop","hat"]
//const strs = ["eat","tea","tan","ate","nat","bat","tab","bat","ant"]

console.log(groupAnagrams(strs))