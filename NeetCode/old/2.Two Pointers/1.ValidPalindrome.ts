const isPalindrome = (s: string): boolean => {
  
  const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase() // limpa a string

  let left = 0
  let right = cleaned.length - 1

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) 
      return false
    
    left++
    right--
  }

  return true
}

console.log( isPalindrome('Was it a car or a cat I saw?') )

console.log( isPalindrome("tab a cat") )

console.log( isPalindrome("tab a bat") )