# Number Challenge
**Instructions**
create a variable called `x` that is a random number b/w 1 & 100 & variable `y` that is random no b/w 1 & 50.
create a variable for `sum` ,`Difference`, `Product`, `quotient` and `Remainder` of `x` and `y`. Log theoutput in a string that shows to no's of `x` and `y` along with operator and result

- You can log the output string directly or put string directly or put them in seperate variableand log them like below .
- You can use string concatenation or template literal for the output.


**Expected Output**

```Javascript
  console.log(sum)
  console.log(diff)
  console.log(product)
  console.log(quotient)
  console.log(rm)
  ```

  **Hints**
1. the `Math.random()` function return a floating  point , no inrange 0 to less than 1.
2. The `Math.floor()` function will round a number down to the nearest integer.


<details>
  <summary>Click For Solution</summary>
  
  ```JavaScript
x = Math.floor(Math.random() * 100) + 1;
y = Math.floor(Math.random() * 50) + 1;

// Get the sum
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);
// Get the difference
const difference = x - y;
const differenceOutput = `${x} - ${y} = ${difference}`;
console.log(differenceOutput);

// Get the product
const product = x _ y;
const productOutput = `${x} _ ${y} = ${product}`;
console.log(productOutput);

// Get the quotient
const quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient}`;
console.log(quotientOutput);


// Get the remainder
const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`;
console.log(rmOutput);

```

</details>


```


