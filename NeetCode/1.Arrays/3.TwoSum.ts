/*
Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
Return the answer with the smaller index first.
*/

const twoSumX = (nums:number[], target:number):number[] => {

   let check = new Map<number,number>()      //Create a map to store de checked numbers

   let ret:number[] = []                     //Create an array to store the result

   nums.forEach((num, index) => {            //Iterate thought the input
      
      let diff = target - num                //Calc diff between target and actual number

      if(check.has(diff)){                   //Check if map has the diff
         ret.push(check.get(diff)!)          //Push the diff index to the result
         ret.push(index)                     //Push the actual number index to the result
      }

      check.set(num,index)
   })

   return ret.sort()
}

console.log(twoSumX([1,4,6,2],10))