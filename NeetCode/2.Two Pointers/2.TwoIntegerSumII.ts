/*
Given an array of integers numbers that is sorted in non-decreasing order.
Return the indices **(1-indexed)** of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2.
Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.
There will always be exactly one valid solution.
*/

const twoIntegerSum = (nums:number[], target:number):number[] => {

   let left:number = 0                                      // Create a number to be the left pointer
   let right:number = nums.length -1                        // Create a number to be the right pointer

   while (left < right) {                                   // Moving pointers

      let sum = nums[left] + nums[right]                    // Sum the actual pointers values

      if(sum > target)                                      // If sum is greater than target
         right--                                            // Move right pointer backwards to get the next lowest value

      else if(sum < target)                                 // If sum is smaller than target
         left++                                             // Move left pointer forward to get the next greater value 

      else                                                  // If sum is not smaller nor greater than target
         return [left+1, right+1]                           // We have the numbers that add up to the target
   }

   return []
} 

console.log(twoIntegerSum([1,2,3,4], 3))
console.log(twoIntegerSum([3,4,10,22], 25))