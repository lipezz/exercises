// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
// Return the answer with the smaller index first.

twoIntegerSum = (nums, target) => {

   let map = new Map()                 //Create a Map to store the numbers and its index

   let ret = []

   nums.forEach((element, index) => {   // Iterate the numbers given
      
      let complement = target - element      // Calculate the difference between the number and the target

      if(map.has(complement)) {              // Check if the Map has the complement

         ret.push(map.get(complement))       // push the complement to the return array

         ret.push(index)                     // push the actual number
      }

      map.set(element,index)
      
   })

   return ret
}

console.log(twoIntegerSum([3,4,5,6],7))