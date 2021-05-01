// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-an-export-fallback-with-export-default

function subtract(x, y) {
    return x - y;
  }
  
  export default function(x, y){
    return x + y;
  }