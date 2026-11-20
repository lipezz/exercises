// Given an integer n, return a counter function. 
// This counter function initially returns n and then returns 1 more than the previous value 
// every subsequent time it is called (n, n + 1, n + 2, etc).

var createCounter = n => { 
   let count = n
   return ()=> {
       count++
       return count-1
   }
}

const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12
console.log(counter()) // 13
console.log(counter()) // 14
console.log(counter()) // 15