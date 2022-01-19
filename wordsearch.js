const wordSearch = (letters, word) => {
  if (word.length < 1 || letters.length < 1) return false;
  
  const horizontalJoin = letters.map(ls => ls.join(''));
  let column = "";
    
  for (let i = 0; i < letters[0].length; i ++) {
    column = "";
    letters.map(row => {
      column += row[i];
    });
  
  }
  if (column.includes(word)) return true;
  if (column.split("").reverse().join('').includes(word)) return true;
  
  // let diagonalLeft = "";
  // for(let i = letters.length; i > 0; i --){
  //     for(let j = letters[0].length; j >= i; j --) {
  //         diagonalLeft += letters[i][j];
  //         console.log(diagonalLeft);
  //     }
  // }
    
  
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
    if (l.split("").reverse().join('').includes(word)) return true;
  }
  
  return false;
  
  
};
  
module.exports = wordSearch;