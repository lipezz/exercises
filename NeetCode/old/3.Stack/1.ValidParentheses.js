// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
// The input string s is valid if and only if: Every open bracket is closed by the same type of close bracket. 
// Open brackets are closed in the correct order. Every close bracket has a corresponding open bracket of the same type. 
// Return true if s is a valid string, and false otherwise.

const isValid = s => {
  const stack = [] // Create a 'stack' to save the brackets
  const brackets = { // Create an object with the opening brackets and its closing related 
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (let char of s) { // Iterate though the received chars

    if (char in brackets) {  // If the char is one of the 'keys'/opening brackets defined in the 'brackets'
      stack.push(char)  // Add it to our 'stack'
    
    } else { // If its a closening bracket, it wont be in the atributes of the obj we created, so check the stack top
      
      const last = stack.pop() // Get the latest value pushed to the 'stack'

      if (brackets[last] !== char)  // Check if the char is not the closening correspondent bracket // `Waiting for: ${brackets[last]} but got ${char}`
        return false      
    }
  }

  const result = stack.length === 0 // If the stack is empty
  return result
}

console.log(isValid('{[)]}'))
console.log(isValid('{[()]}'))