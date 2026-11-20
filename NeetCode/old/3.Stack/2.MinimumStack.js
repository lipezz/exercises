class MinStack {

  constructor() {
    this.stack = []       // Pilha normal
    this.minStack = []    // Pilha que mantém o mínimo até o momento
  }

  push(val) {
    this.stack.push(val)                                      // Adiciona o valor normalmente
    
    const min = this.minStack.length === 0
      ? val                                                   // Se minStack está vazia, esse é o menor ate agora
      : Math.min(val, this.minStack[this.minStack.length - 1]) // Compara com o atual (se primeiro) ou ultimo valor inserido
    
      this.minStack.push(min)                                   // Guarda o novo mínimo
  }

  pop() {
    this.stack.pop()      // Remove do topo da pilha normal
    this.minStack.pop()   // Remove também da pilha de mínimos
  }

  top() {
    return this.stack[this.stack.length - 1]  // Retorna o topo da pilha normal
  }

  getMin() {
    return this.minStack[this.minStack.length - 1] // Retorna o menor valor atual
  }
}