/*
Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.
A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. 
The elements do not have to be consecutive in the original array.
You must write an algorithm that runs in O(n) time.
*/

const longestConsecutive = (nums: number[]): number => {

   const numSet: Set<number> = new Set(nums)         // Create a Set from the input array to remove duplicates and allow O(1) lookups
   let longest: number = 0                           // Variable to store the length of the longest consecutive sequence found

   for (let num of numSet) {                         // Iterate through each number in the Set

      if (!numSet.has(num - 1)) {                    // Check if the current number is the start of a sequence (no previous number)
      
         let lenght: number = 1                      // Initialize the length of the current consecutive sequence
         
         while (numSet.has(num + lenght))            // While the next consecutive number exists in the Set
            lenght++                                 // Increment the length of the current sequence
         
         longest = Math.max(longest, lenght)         // Update longest if the current sequence is longer than previous sequences
      }      
   }
   
   return longest                                    // Return the length of the longest consecutive sequence found
}


const i1:number[] = [2,20,4,10,3,4,5]
const i2:number[] = [0,3,2,5,4,6,1,1]

console.log(longestConsecutive(i1))
console.log(longestConsecutive(i2))