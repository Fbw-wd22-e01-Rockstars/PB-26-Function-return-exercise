// The following function returns true if the parameter age is greater than 18.

// Otherwise returns false:


function checkAge(age) {
    return age>18
  }
console.log(checkAge(23))
console.log(checkAge(18))

// Write a function min(a,b) which returns the least of two numbers a and b.
  function min(a, b) {
   return Math.min(a,b)
   return a>b? b:a
  }
  console.log(min(2,4))

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
  function pow(x, n) {
    return Math.pow(x,n)
    return x**n
  }

  console.log(pow(2,3))