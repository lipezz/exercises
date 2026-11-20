// Given an integer array nums, 
// return true if any value appears more than once in the array, 
// otherwise return false.

hasDuplicate = (nums) => {

   let occurs = new Set()   //Create a Set to store unique values
   let ret = false

   nums.forEach(element => {   //Iterate the argument received

      if(occurs.has(element))    // Set already has the numer ?
         ret = true              // Duplicate
      else                       // Set do not have the number
         occurs.add(element)     //Store it in the set to further verification 
   })

   return ret
}

console.log(hasDuplicate([1,2,3,3,5,6]))