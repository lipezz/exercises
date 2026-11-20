// Design an algorithm to encode a list of strings to a single string. 
// The encoded string is then decoded back to the original list of strings.
// Please implement encode and decode

encode = strs => {

   let res = ""

   for (let s of strs) // Iterate through the strings
      res += s.length + "#" + s  // Concatenate the return string with the item lenght, a # char and its value

   return res
}
    
decode = strs => {

   let res = []   
   let i = 0
   
   while (i < strs.length) {
      let j = i
      while (strs[j] !== '#') 
         j++

      let length = parseInt(strs.substring(i, j))
      i = j + 1
      j = i + length
      res.push(strs.substring(i, j))  
      i = j
   }
   return res
}

console.log(encode(['cat','rat','fish']))
console.log(decode('3#cat3#rat4#fish'))