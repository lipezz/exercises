/*
Given an integer array nums, return all the triplets 
[nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.
The output should not contain any duplicate triplets. You may return the output and the triplets in any order.
*/

const threeSumx = (nums:number[]):number[][] => {

   nums.sort((a, b) => a - b)
   let res:number[][] = []
   
   for (let i = 0; i < nums.length; i++) {

      if (i > 0 && nums[i] === nums[i - 1]) continue // jump to next iteration if the previous value is equal to current value
      let l = i + 1
      let r = nums.length - 1

      while (l < r) {
         let sum = nums[i] + nums[l] + nums[r]

         if ( sum > 0)
            r--
         else if( sum < 0)
            l++
         else {
            res.push([nums[i], nums[l], nums[r]])

            while (nums[l] === nums[l + 1]) l++ // if next value equals to current value, skip it
            while (nums[r] === nums[r - 1]) r-- // if previous value equals to current value, skip it

            l++
            r--
         }         
      }
   }         
   return res
}

console.log(threeSumx([-1,0,1,2,-1,-4]))