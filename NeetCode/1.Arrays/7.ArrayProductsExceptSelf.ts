/*
Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
Each product is guaranteed to fit in a 32-bit integer.
Follow-up: Could you solve it in O(n) time without using the division operation?
*/

const productExceptSelf1 = (nums:number[]):number[] => {

  const n:number = nums.length
  const res:number[] = new Array(n)
  const pref:number[] = new Array(n)
  const suff:number[] = new Array(n)

  pref[0] = 1
  suff[n - 1] = 1

  for (let i = 1; i < n; i++) 
    pref[i] = nums[i - 1] * pref[i - 1]
  
  for (let i = n - 2; i >= 0; i--) 
    suff[i] = nums[i + 1] * suff[i + 1]
  
  for (let i = 0; i < n; i++) 
    res[i] = pref[i] * suff[i]
  
  return res
}

const productExceptSelf = (nums:number[]):number[] => {

  const length = nums.length                                     // Get the lenght of the input array
  const answer:number[] = new Array(length)                      // Create a new array with the lenght of the input
  answer.fill(1)                                                 // Fill it with 1s

  let prefix = 1                                                 // Will hold the running product from the left
  let postfix = 1                                                // Will hold the running product from the right

  for (let i = 0; i < length; i++) {                             // Run this for each index of the array input                                                
    answer[i] = prefix                                           // Assign current prefix to result
    prefix *= nums[i]                                            // Update prefix by multiplying current number
  }

  for (let i = length - 1; i >= 0; i--) {
    answer[i] *= postfix                                         // Multiply the existing prefix by current postfix
    postfix *= nums[i]                                           // Update postfix by multiplying current number
  }

  return answer                                                  // Return the final array
}

const nums:number[] = [1,2,4,6]
const nums1:number[] = [0,0]

console.log(productExceptSelf(nums))   
console.log(productExceptSelf(nums1))   
console.log(productExceptSelf1(nums))   
console.log(productExceptSelf1(nums1))   