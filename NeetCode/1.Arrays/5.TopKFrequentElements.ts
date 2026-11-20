/*
Given an integer array nums and an integer k, return the k most frequent elements within the array.
The test cases are generated such that the answer is always unique.
You may return the output in any order.
*/

const topKFrequent = (nums:number[], k:number):number[] => {

   let ret:number[] = []                               //Create an array to store the results

   let numberFrequency = new Map<number,number>()      //Create a map to store number frequency

   for (const n of nums) {                             //Iterate through the input        

      if(!numberFrequency.has(n))                      //If the number isnt in the map
         numberFrequency.set(n,1)                      //Put the number in the map as key and start its counter
      else                                             //Else the number is on the map
         numberFrequency.set(                          //Increment its counter
            n,(numberFrequency.get(n)!+1)
         )
   }

   let arr = Array.from(numberFrequency.entries())     //Create an array from the map
   arr.sort((a, b) => b[1] - a[1])                     //Sort by frequency, greatest first
  
   for (let i = 0; i < k; i++) {                       //Iterate through input
      ret.push(arr[i][0])                              //Put the most frequent just sortered 
      if (i === k) break                               //k times
   }

   return ret.sort()
}

console.log(topKFrequent([1,2,2,3,3,3,4,5,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],3))