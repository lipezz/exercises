// function that calculates how many car fleets reach the target

const carFleet = (target: number, position: number[], speed: number[]): number => {  
  
  const cars = position                            // list of starting positions
    .map((p, i) => [p, speed[i]])                  // create pairs [position, speed] for each car
    .sort((a, b) => b[0] - a[0])                   // sort cars by position descending (closest to target first)
  
  const stack: number[] = []                       // stack to store fleet arrival times
  
  for (const [p, s] of cars) {                     // loop through sorted cars
    const time = (target - p) / s                  // time needed for this car to reach destination
    if (!stack.length || time > stack[stack.length - 1]) stack.push(time)  
    // if stack empty OR this car arrives later → it forms a new fleet
    // if it arrives earlier or equal → it merges into the fleet ahead
  }
  
  return stack.length                              // number of fleets is the size of the stack
}

console.log(carFleet(10, [1,4], [3,2]))            // example: should output 1