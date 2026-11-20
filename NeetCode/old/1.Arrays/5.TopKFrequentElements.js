// Given an integer array nums and an integer k, return the k most frequent elements within the array.
// The test cases are generated such that the answer is always unique.
// You may return the output in any order.

topKFrequent = (nums, k) => {

   const numberCount = new Map()                                      // Create a map to store each number frequency

   for (let number of nums) {                                         // Iterate through the received array 

      if (numberCount.has(number))                                    // If the number exist in the map
         numberCount.set(number, (numberCount.get(number) + 1))       // Increase its counter
        
      else                                                            // If the number do not exist in the map
         numberCount.set(number, 1)                                   // Start its counter
   }  
   
   let arrayFromMap = Array.from(numberCount.entries())               // Create an array from the map 
   arrayFromMap.sort((a, b) => b[1] - a[1])                           // Sort by frequency, greatest first

   let results = []                                                   // Create an array to store and return the results

   for (let i = 0; i < k; i++)                                        // Iterate through K    
      results.push(arrayFromMap[i][0])                                // Get the number and store the specified numbers quantity
   
   return results.sort()
}

console.log(topKFrequent([1,2,2,3,3,3,4,5,7,7,7,7],3))