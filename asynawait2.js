// object creation
const myUsers={
    userList
    :[]
}
const myCoolFunction= async()=>{
    const response= await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData= await response.json();
    return jsonUserData;
}
const anotherFunc= async()=>
{
    const data= await myCoolFunction();
    myUsers.userList=data;
    console.log(myUsers.userList)
}
anotherFunc();
console.log(myUsers.userList)