encode = strs => {

   let result = ''                            //Create a string to return the appends
   let strLenght = 0                          //Create a number to store each string lenght during the loop 

   for (const item of strs){                         //Iterate through the input 
      strLenght = item.length                        //Get item lenght
      result += strLenght + "#" + item               //Add a # after the lenght and before the word
   }
   
   return result
}

decode = (str) => {

  const res = []                                     // Initialize an array to store the decoded strings
  
  let i = 0                                          // Pointer to track the current position in the string

  while (i < str.length) {                           // Iterate through the input string

    const sepIndex = str.indexOf('#', i)             // Get index of the next '#' starting from index i

    const wordLenght = Number(str.slice(i, sepIndex))// Get the number with the lenght of the word, from i to '#'

    const wordStart = sepIndex + 1                   // Calculate the start index of the word (right after '#')
    
    const wordEnd = wordStart + wordLenght           // Calculate the end index of the word (based on its length)

    res.push(str.slice(wordStart, wordEnd))          // Extract and store the word using slice()

    i = wordEnd                                      // Move the pointer to the beginning of the next encoded part
  }

  return res                                         // Return the array of decoded strings
}

const encoded = encode(["we","say",":","yes","!@#$%^&*()"]) 
console.log(encoded)

const decoded = decode(encoded)
console.log(decoded)