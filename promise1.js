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


//callback hell se bachne ke liye promise aya, promise ke teen state hote hai -pending, fullfilled , rejected
// promise asynchronous task hai aur javascript synchrounous hai matlab javascript single threaded hai
// asynchronous me task so simple hota hai voh pehele execute ho jata hai

let myPromise= new Promise((resolve,reject)=>
{
   const error=false;
   if(!error)
   {
      resolve("yes!resolved the promise")
   }
   else
   {
      reject("not ressolved the promise")
   }
})
console.log(myPromise)

// .then ka ujse hota hai value ko return karne ke liye
myPromise.then((value)=>
{
   return value + 1;
}).then((newValue)=>
{
   console.log(newValue)
})
fetch("https://jsonplaceholder.typicode.com/posts").then((data)=>
{
  console.log(data)
})
.catch(error=>
{
  console.log(error)
})
console.log(result)

// to catch the error
 myPromise= new Promise((res,rej)=>
{
  let error=true;
  if(!error)
  {
    res('yes there is error')
  }
  else
  {
    rej('no error')
  }
})
console.log(myPromise)
myPromise.then((value)=>
{
  return value;
}).then((newValue)=>
{
  console.log(newValue)
}).catch(err=>
{
  console.error(err)
})
