import { performance } from 'perf_hooks'

export const measurePerformance = (fn: (h: number[]) => number, h: number[], runs: number = 1000) => {
  const result = fn(h)

  let totalTime = 0
  let totalMemory = 0

  for (let i = 0; i < runs; i++) {
    global.gc?.() // Força garbage collection (necessário rodar Node com --expose-gc)
    
    const startMem = process.memoryUsage().heapUsed
    const startTime = performance.now()

    fn(h)

    const endTime = performance.now()
    const endMem = process.memoryUsage().heapUsed

    totalTime += (endTime - startTime)
    totalMemory += (endMem - startMem)
  }

  const avgTime = totalTime / runs
  const avgMemory = totalMemory / runs

  //console.log(`Result: ${result}`)
  //console.log(`Average time: ${avgTime.toFixed(5)} ms`)
  //console.log(`Average memory: ${(avgMemory / 1024).toFixed(2)} KB`)

  return { result, avgTime, avgMemory }
}


export const measurePerformancex = (fn: (s: string) => boolean, s: string, runs: number = 1000) => {
  const result = fn(s)

  let totalTime = 0
  let totalMemory = 0

  for (let i = 0; i < runs; i++) {
    global.gc?.() // Força garbage collection (necessário rodar Node com --expose-gc)
    
    const startMem = process.memoryUsage().heapUsed
    const startTime = performance.now()

    fn(s)

    const endTime = performance.now()
    const endMem = process.memoryUsage().heapUsed

    totalTime += (endTime - startTime)
    totalMemory += (endMem - startMem)
  }

  const avgTime = totalTime / runs
  const avgMemory = totalMemory / runs

  return { result, avgTime, avgMemory }
}