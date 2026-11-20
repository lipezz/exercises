/*
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
*/

const hasDuplicate = (nums: number[]): boolean => {

   let mySet = new Set()  //Create a Set to store unique values

   for (const val of nums) {  //Iterate through the input
      
      if(mySet.has(val))     //The Set has the actual value?
         return true         //If so there are duplicates

      mySet.add(val)        //Add the value to the Set
   }

   return false //Only if there are no duplicates
}

console.log(hasDuplicate([2,3,4,6,7,8]))