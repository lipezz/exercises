// O(n²) approach:

hasPairFor = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) 
      if (arr[i] + arr[j] === sum) 
         return true
         //return [arr[i], arr[j]]
  }
  return false
}


// O(n) approach:

hasPair = (arr, sum) => {
  const seen = new Map()
  for (let num of arr) {
    if (seen.has(sum - num)) 
      return true
    seen.set(num, true)
  }
  return false
}

console.log(hasPairFor([2,4,6,8],8))

console.log(hasPair([2,4,6,8],8))
