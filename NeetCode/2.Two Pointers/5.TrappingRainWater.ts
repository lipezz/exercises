import { measurePerformance } from '../MeasurePerformance'

const trapRainWater1 = (height: number[]): number => {

  if (!height.length) return 0 

  let n = height.length
  let res = 0

  for (let i = 0; i < n; i++) {                    // Outer loop runs n times → O(n)
   
    let leftMax = height[i]
    let rightMax = height[i]
    
    for (let j = 0; j < i; j++)                    // Scan all elements to the left of i. Inner loop → O(n) 
      leftMax = Math.max(leftMax, height[j])
    
    for (let k = i + 1; k < n; k++)                // Scan all elements to the right of i. Inner loop → O(n) 
      rightMax = Math.max(rightMax, height[k])

    res += Math.min(leftMax, rightMax) - height[i] // For every i, do two full scans → total O(n²)
  }

  return res
}

const trapRainWater2Pointers = (height: number[]): number => {

  if (!height.length) return 0 

  let l = 0
  let r = height.length - 1
  let leftMax = height[l]
  let rightMax = height[r]
  let res = 0

  while (l < r) {                              // Both pointers move across the array only once → O(n)

    if (leftMax < rightMax) {
      l++                                      // Move left pointer one step
      leftMax = Math.max(leftMax, height[l])   // Constant time update O(1)
      res += leftMax - height[l]               // Constant time calculation O(1)
    } else {
      r--                                      // Move right pointer one step
      rightMax = Math.max(rightMax, height[r]) // Constant time update O(1)
      res += rightMax - height[r]              // Constant time calculation O(1)
    }
  }                                            // Entire array processed in a single pass → O(n)

  return res
}

const height = [0,1,0,2,1,0,1,3,2,1,2,1,6,9]

const perf1 = measurePerformance(trapRainWater1, height)
const perf2 = measurePerformance(trapRainWater2Pointers, height)

console.log(`trapRainWater1 → Result: ${perf1.result}, Time: ${perf1.avgTime.toFixed(5)} ms, Memory: ${(perf1.avgMemory/1024).toFixed(2)} KB`)
console.log(`trapRainWater2Pointers → Result: ${perf2.result}, Time: ${perf2.avgTime.toFixed(5)} ms, Memory: ${(perf2.avgMemory/1024).toFixed(2)} KB`)