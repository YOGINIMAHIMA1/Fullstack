// showing pending state  in promise using fetch api
const users= fetch("https://jsonplaceholder.typicode.com/users");
console.log(users)// it will show only pending state not data
fetch("https://jsonplaceholder.typicode.com/users").then(response=>
{
    //console.log(response)-it will not return json data
    return response.json();// it will send the response

})/*.then(data=>
{
    console.log(data)// json data printed
})*/  // it will not print the data outside this block

.then(data=>{
    data.forEach(user=>{
        console.log(user)
    })
})
console.log(users)
// .then() ki chaining ko khatam karane ke liye aysnc await aa gaya ye kafi better way hai code karne ka ye bhi wait karane ke liye use hota hai




