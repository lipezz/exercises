const evalRPN = (tokens: string[]) => { 

  const stack: number[] = [] 

  for (const c of tokens) { 
    
    if (c === '+')  
      stack.push(stack.pop()! + stack.pop()!) // soma dos dois últimos valores, operação comutativa, ordem dos operandos não importa

    else if (c === '-') { 
      const b = stack.pop()! // pega o último número
      const a = stack.pop()! // pega o penúltimo número
      stack.push(a - b)      // salva o resultado b - a (ordem correta)
    }

    else if (c === '*')   
      stack.push(stack.pop()! * stack.pop()!) // multiplica os dois últimos valores, operação comutativa, ordem dos operandos não importa
    
    else if (c === '/') { 
      const b = stack.pop()!                  // pega o último número
      const a = stack.pop()!                  // pega o penúltimo número
      stack.push(Math.trunc(a / b))           // divisão truncada com ordem correta
    }

    else  
      stack.push(parseInt(c)) // converte string para número e empurra para a pilha
  }

  return stack.pop()! // retorna o resultado final
}

const tokens = ["1","2","+","3","*","4","-"]

console.log(evalRPN(tokens))