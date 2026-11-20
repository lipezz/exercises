/*
You are given a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:
-Each row must contain the digits 1-9 without duplicates.
-Each column must contain the digits 1-9 without duplicates.
-Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
-Return true if the Sudoku board is valid, otherwise return false
Note: A board does not need to be full or be solvable to be valid.
*/

const isValidSudoku = (board:string[][]):boolean => {
   
   for (let row = 0; row < 9; row++) {                  // Iterate through each row of the input
      
      let rows:Set<string> = new Set()                  // Create a Set to store each row values

      for (let i = 0; i < 9; i++) {                     // Iterate through each row value
         
         if(board[row][i] === '.')   continue           // If actual value is "." valid input continue execution
         if(rows.has(board[row][i])) return false       // If actual value is already in the row then its a repeated value and board is not valid  
         
         rows.add(board[row][i])                        // If value is not in the row, board is valid so far, add value to the set for further comparison 
      }      
   }

   for (let col = 0; col < 9; col++) {                  // Iterate through each col of the input
      
      let cols:Set<string> = new Set()                  // Create a Set to store each col values

      for (let i = 0; i < 9; i++) {                     // Iterate through each col value
         
         if(board[i][col] === '.')   continue           // If actual value is "." valid input continue execution
         if(cols.has(board[i][col])) return false       // If actual value is already in the col then its a repeated value and board is not valid  
         
         cols.add(board[i][col])                        // If value is not in the col, board is valid so far, add value to the set for further comparison 
      }      
   }

    for (let square = 0; square < 9; square++) {           // Iterate through each of the 9 squares (3x3 subgrids)
    
      let squares: Set<string> = new Set()                 // Create a Set to keep track of the values seen in the current square

      for (let r = 0; r < 3; r++) {                        // Iterate over the 3 rows inside the current square

         for (let c = 0; c < 3; c++) {                     // Iterate over the 3 columns inside the current square
         
               let row = Math.floor(square / 3) * 3 + r    // Calculate the row index of the current cell in the board
               let col = (square % 3) * 3 + c              // Calculate the column index of the current cell in the board
               
               if (board[row][col] === '.') continue          // Skip if the cell is empty (represented by '.')
               if (squares.has(board[row][col])) return false // If the value already exists in the Set, it's invalid (duplicate)
               
               squares.add(board[row][col])               // Otherwise, add the value to the Set
         }
      }
   }  

   return true
}

const b1 = [
   ["1","2",".",".","3",".",".",".","."],
   ["4",".",".","5",".",".",".",".","."],
   [".","9","8",".",".",".",".",".","3"],
   ["5",".",".",".","6",".",".",".","4"],
   [".",".",".","8",".","3",".",".","5"],
   ["7",".",".",".","2",".",".",".","6"],
   [".",".",".",".",".",".","2",".","."],
   [".",".",".","4","1","9",".",".","8"],
   [".",".",".",".","8",".",".","7","9"]
]

const b2 = [
   ["1","2",".",".","3",".",".",".","."],
   ["4",".",".","5",".",".",".",".","."],
   [".","9","1",".",".",".",".",".","3"],   //duplicado 1 na 3ª linha do 1 square
   ["5",".",".",".","6",".",".",".","4"],
   [".",".",".","8",".","3",".",".","5"],
   ["7",".",".",".","2",".",".",".","6"],
   [".",".",".",".",".",".","2",".","."],
   [".",".",".","4","1","9",".",".","8"],
   [".",".",".",".","8",".",".","7","9"]
]

const b3 = [
   [".",".","4",".",".",".","6","3","."],
   [".",".",".",".",".",".",".",".","."],
   ["5",".",".",".",".",".",".","9","."],
   [".",".",".","5","6",".",".",".","."],  // duplicado 5 na coluna 3 ou no square
   ["4",".","3",".",".",".",".",".","1"],
   [".",".",".","7",".",".",".",".","."],
   [".",".",".","5",".",".",".",".","."],  // duplicado 5 na coluna 3 ou no square
   [".",".",".",".",".",".",".",".","."],
   [".",".",".",".",".",".",".",".","."]
]

console.log(isValidSudoku(b1)) //true
console.log(isValidSudoku(b2)) //false 
console.log(isValidSudoku(b3)) //false