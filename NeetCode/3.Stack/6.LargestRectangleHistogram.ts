// You are given an array of integers heights where heights[i] represents the height of a bar. The width of each bar is 1.
// Return the area of the largest rectangle that can be formed among the bars.
// Note: This chart is known as a histogram.

const largestRectangleArea = (heights: number[]): number => { // função principal que recebe o array de alturas

  const stack: number[] = [] // stack para armazenar os índices das barras em ordem crescente de altura
  let maxArea = 0 // variável para armazenar a maior área encontrada

  heights = [...heights, 0] // adiciona uma barra de altura 0 no final para forçar o esvaziamento da stack

  heights.forEach((h, i) => { // percorre cada barra com sua altura e índice

    while (stack.length && heights[stack[stack.length - 1]] > h) { // enquanto a stack não estiver vazia e a altura do topo for maior que a atual
   
      const height = heights[stack.pop()!] // remove o topo da stack e obtém a altura da barra correspondente

      const width = stack.length === 0 // verifica se ainda existe elemento na stack
        ? i // se estiver vazia, a largura é o índice atual
        : i - stack[stack.length - 1] - 1 // senão, calcula a largura baseada no novo topo da stack

      maxArea = Math.max(maxArea, height * width) // atualiza a maior área encontrada
    }

    stack.push(i) // adiciona o índice atual na stack
  })

  return maxArea // retorna a maior área calculada
}

let heights = [7,1,7,2,2,4]

console.log(largestRectangleArea(heights))