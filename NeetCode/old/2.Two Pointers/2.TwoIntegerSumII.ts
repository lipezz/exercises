// Given an array of integers numbers that is sorted in non-decreasing order. 
// Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given 
// target number target and index1 < index2. 
// Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.
// There will always be exactly one valid solution.

const twoSum = (numbers: number[], target: number): number[] => {
  
  let left = 0 // ponteiro inicial à esquerda
  let right = numbers.length - 1 // ponteiro inicial à direita

  while (left < right) { // continua enquanto os ponteiros não se cruzarem
    const sum = numbers[left] + numbers[right] // soma dos dois elementos atuais

    if (sum === target) 
      return [left + 1, right + 1] // retorna índices 1-based
    
    if (sum < target) 
      left++ // se a soma for menor que o alvo, movemos o ponteiro da esquerda para a direita
    else 
      right-- // se for maior, movemos o ponteiro da direita para a esquerda
  }

  return [] // não será alcançado, pois o problema garante uma única solução
}

console.log(twoSum([2, 7, 11, 15], 9)) 