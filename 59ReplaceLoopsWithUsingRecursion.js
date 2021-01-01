// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion
function sum(arr, n) {
    // Only change code below this line
    if (n <= 0)
    {
        return 0;
    }
    else{
        return sum(arr, n-1) + arr[n-1];
        // ([2,3,4],3) + arr[2] 
        // ([2,3,4],2) + arr[1] = 3 + 3
        // ([2,3,4],1) + arr[0] = 2 + 1
        // n == 0 return 1
    }
    // Only change code above this line
  }

  var result = ([2,3,4],3);
  console.log(result);
  