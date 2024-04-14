 # Capitalize Challenge
 **Instructions**

 change the First letter of variable `myString`  and then store it into `myNewString`

  create multiple solutions if you would like

 **Expected Result:**
 ``` Javascript
  let myString='womenwhocode';
  let myNewString= 'Womenwhocode';
```

**Hints**
1>You can use `charAt()` method as well as `string[index]` to get the character at specific index.
2>The `toUpperCase()` method will make entir string uppercase.
3> `subString` or `slice()` will return a specifc portion of string

<details>
    <summary>Click For Solution</summary>
  
  There are many ways to do this. Let's take a look at a few

```JavaScript
// Solution 1
const myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// Solution 2 (Uses string[0] instead of string.charAt(0))
const myNewString = myString[0].toUpperCase() + myString.substring(1);

// Solution 3 (Uses template literal and slice())
const myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;
```

In all of these, we get the first character of the string, then we use the **substring()** or **slice()** method to get the rest of the string. We then use the **toUpperCase()** method to capitalize the first character and then we concatenate the result with the rest of the string.

</details>