// showing pending state  in promise using fetch api
const users= fetch("https://jsonplaceholder.typicode.com/users");
console.log(users)// it will show only pending state not data
fetch("https://jsonplaceholder.typicode.com/users").then(response=>
{
    //console.log(response)-it will not return json data
    return response.json();// it will send the response

}).then(data=>
{
    console.log(data)// json data printed
})