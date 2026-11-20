// returns array of days until a warmer temperature

const dailyTemperatures = (temps: number[]): number[] => { 
   
   const res = Array(temps.length).fill(0)     // result array initialized with zeros
   const stack: number[] = []                  // stack to store indices of unresolved temps

   for (let i = 0; i < temps.length; i++) {    // iterate through each day
      
      while (stack.length > 0 && temps[i] > temps[stack[stack.length - 1]]) { // while current temp is warmer than the last unresolved one
         
         const index = stack.pop()!     // pop the index of a cooler day
         
         res[index] = i - index         // calculate how many days it took to find a warmer temperature
      }
      
      stack.push(i)                     // push current index onto the stack to be resolved later
   }

   return res 
}

const temperatures:number[] = [30,38,30,36,35,40,28]

console.log(dailyTemperatures(temperatures))