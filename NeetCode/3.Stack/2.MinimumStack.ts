let stack:number[] = []
let minStack:number[] = []

const push = (val:number):void =>{   

   if(!isNaN(val)){
      stack.push(val)
      if(minStack.length===0) minStack.push(val)
      else minStack[0] = Math.min(val, minStack[0])
   }
}

const pop = ():void =>{
   stack.pop()
   minStack.pop()
}

const topp = ():number =>{
   return stack[stack.length-1]
}

const getMin = ():number =>{
   return minStack[0]
}    

push(5)
push(4)
push(8)
pop()
push(3)
push(33)
console.log ( topp() )
console.log ( getMin() )