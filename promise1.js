let a=10;
let b=20;
let  result=a+b;
/*
let resultFromServer=fetch("https://jsonplaceholder.typicode.com/posts");
console.log(resultFromServer)*/

 /*async function getData()
 {
    let result1 =await fetch ("https://jsonplaceholder.typicode.com/posts"
 );
 console.log(result1);
 }
 getData()
 */
/*
 async function getData() {
  // Using the await keyword to wait for the fetch to complete
  let result = await fetch("https://jsonplaceholder.typicode.com/posts");
  // Logging the result to the console
  console.log( await result.json());
}

// Calling the getData function
getData();

 console.log(result)
 */

 fetch("https://jsonplaceholder.typicode.com/posts").then((data)=>
 {
   console.log(data)
 })
 .catch(error=>
{
   console.log(error)
})
console.log(result)