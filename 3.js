/*const myFunction= async()=>
{
    const response= await fetch("https://www.jsonplaceholder.typicode.com/users")
    const jsonUserData= 
}
*/
/*
const users= fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
    return response.json()
})
.then(data=>{
        data.forEach(element => {
            console.log(element)
        });
    
})
*/
// async/await
/*
const myUser={
    userList:[]
}
const coolFunction= async()=>{
   const response= await fetch("https://jsonplaceholder.typicode.com/users")
    const jsonUserData= await response.json();
  //  console.log(jsonUserData)
  return jsonUserData;

}
*/
//coolFunction();
/*
const secondFunction= async ()=>{
    const data= await coolFunction()
   // console.log(data)
    myUser.userList=data
console.log( myUser.userList)
}
secondFunction();
*/

// workflow function

const getEmails= async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const Jsonplaceholder= await response.json();
    const  Emails= Jsonplaceholder.map(user=>{
        return user.email

    });
   // console.log(Emails)
   postToWebPage(Emails)
}
const postToWebPage= (data)=>
{
    console.log(data)
}
getEmails();