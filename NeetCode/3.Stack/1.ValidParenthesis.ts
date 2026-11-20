/*
You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
The input string s is valid if and only if:
Every open bracket is closed by the same type of close bracket. Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. Return true if s is a valid string, and false otherwise.
*/

import { measurePerformancex } from '../MeasurePerformance'

const isValidBrute = (s:string):boolean => {

   while (s.includes('()') || s.includes('{}') || s.includes('[]')) {
      s = s.replace('()', '');
      s = s.replace('{}', '');
      s = s.replace('[]', '');
   }
   return s === '';
}

const isValidStack = (s:string):boolean => {

   const stack:string[] = []                            // Create a 'stack' to save the brackets

   const brackets: Record<string, string> = {           // Create an object to store the opening keys and their correlated closening
      ')': '(',
      ']': '[',
      '}': '{',
   }

   for (const c of s) {                                 // Iterate through the input       
      if (brackets[c]) {                                // If the actual char is the value for this key in the object
         if (stack.length > 0 &&                        // If the stack is not empty and
             stack[stack.length - 1] === brackets[c])   // the last char of it is the closening correlated
            stack.pop()                                 // Remove it from the stack                  
         else                                           // If the stack is empty or does not have the correlated closing char
            return false                                // then string is invalid
      } else 
         stack.push(c)                                  // If the actual char is not the value for this key, add it to the stack 
   } 
   return stack.length === 0
}

//console.log(isValidStack("s"))
//console.log(isValidStack("[]"))
//console.log(isValidStack("([{}])"))
//console.log(isValidStack("[(])"))
//const test = "()".repeat(10000)

const test = "([{}])"

const perf1 = measurePerformancex(isValidBrute, test)
const perf2 = measurePerformancex(isValidStack, test)

console.log(`isValidBrute → Result: ${perf1.result}, Time: ${perf1.avgTime.toFixed(5)} ms, Memory: ${(perf1.avgMemory/1024).toFixed(2)} KB`)
console.log(`isValidStack → Result: ${perf2.result}, Time: ${perf2.avgTime.toFixed(5)} ms, Memory: ${(perf2.avgMemory/1024).toFixed(2)} KB`)