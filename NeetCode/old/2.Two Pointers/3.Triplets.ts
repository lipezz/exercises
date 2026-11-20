// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, 
// and the indices i, j and k are all distinct. The output should not contain any duplicate triplets. 
// You may return the output and the triplets in any order.

const threeSum = (nums: number[]): number[][] => { 

  const result: number[][] = [] // Create an array to store the triplets válidos
  nums.sort((a, b) => a - b) // Sort the array for use with Two Pointers

  for (let i = 0; i < nums.length - 2; i++) { // Iterate the array until the antepenultimate item

    if (i > 0 && nums[i] === nums[i - 1]) continue // Skip duplicates 

      let left = i + 1 // Left pointer starts after i
      let right = nums.length - 1 // Right pointer starts at the arrays end

      while (left < right) { // While pointers do not meet
        const sum = nums[i] + nums[left] + nums[right] // Sum the three values

        if (sum === 0) { // IF zero, valid triplet
          result.push([nums[i], nums[left], nums[right]]) // Save the triplet

        while (left < right && nums[left] === nums[left + 1]) left++ // Skip duplicates to the left
        while (left < right && nums[right] === nums[right - 1]) right-- // Skip duplicates to the right

        left++ // Move left pointer
        right-- // Move right pointer 
      }       
      else if (sum < 0)  // If sum is lesser then zero, we need a greater value
        left++ // Foward left pointer
      else // If sum is greater then zero, we need a smallest value
        right-- // Move right pointer backwards
    }
  }
  return result 
}
console.log(threeSum([-1, 0, 1, 2, -1, -4])) 