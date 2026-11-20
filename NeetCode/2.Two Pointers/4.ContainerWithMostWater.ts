/*
You are given an integer array heights where heights[i] represents the height of the bar.
You may choose any two bars to form a container. 
Return the maximum amount of water a container can store.
*/

const maxArea = (heights:number[]):number => {

   let l:number = 0                                           // left column
   let r:number = heights.length - 1                          // right column
   let res = 0

   while (l < r) {                                            // For each iteration, calculates the container area formed by these two columns

      const area = Math.min(heights[l], heights[r]) *         // Maximum height water will be preserved 
                   (r - l)                                    // Height between the two columns

      res = Math.max(res, area)                               // Stores the biggest area found so far
      
      if (heights[l] <= heights[r])                           // 
         l++
      else 
         r--
   }
   return res
}

console.error(maxArea([1,7,2,5,4]))