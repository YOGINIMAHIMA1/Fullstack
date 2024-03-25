const arr=["Mahima","Kiara","Lara",1,true,"selena"]
arr.forEach((arr1) =>
{
 console.log(arr1);
})

const num=[1,2,3,4,5,6,7]
 num.forEach((num)=>
{
    console.log(num*2);
})

let num2=[];
num.forEach((num)=>
{
   console.log(num2.push(num*2))
})
console.log(num2)

//forEach kuch bhi return nhi krta
let number=[1,20,3,7,30,4,5,50]

function double(n)
{
    return n*2;
}
 let newArr= number.forEach(double)
 console.log(newArr)// undefined---- kyuki forEach kuch bhi return nhi karta
//.map() org array me kuch change nhi karega
 let newArr1= number.map(double)
 console.log(newArr1)// map return kar dega jo bhi store hai

 //.find() ,findIndex()
 let newArr4= number.find((num)=>num===40)
 console.log(newArr4)
let newArr5= number.findIndex((num1)=>num1===30)
console.log(newArr5)

console.log(number.includes(20))
// filter
let newArr6= number.filter((num)=>num%2==0)
console.log(newArr6)

//.slice()----original array ko modify nahi krta
let newArr7= number.slice(1,5)
console.log(newArr7)
console.log(number.slice(5))

// splice()-----org array ko modify krta, element ko remove krta aur return krta new array mein remove element ko
const number1=[2,4,6,8,10,12,14]
let newArr8= number1.splice(3,6)
console.log(number1)// 2,4,6
console.log(newArr8)// 8,10,12,14

// forEach -(TmYChannel)--yeh kuch bhi return nhi krta

const Companies=[
{ name:"Company one",category:"Finance",start:1992,end:2003},
{name:"Company Two", category:"Retail",start:2001,end:2004},
{name:"Company Three", category:"Computer",start:1999,end:2001},
{name:"Company Four", category:"Finance",start:2001,end:2006},
{name:"Company Five", category:"Technology",start:1999,end:2001},
{name:"Company Six", category:"Auto",start:2001,end:2003},
{name:"Company Seven", category:"Sales",start:2001,end:2008},
{name:"Company Eight", category:"Laptop",start:1999,end:2001},
{name:"Company Nine", category:"Electronics",start:2001,end:2010},
{name:"Company Tenth", category:"Auto",start:2007,end:2011},
{name:"Company Eleventh", category:"Sales",start:1995,end:2001},
{name:"Company Twelth", category:"Auto",start:2001,end:2003},
{name:"Company Thirteen", category:"Technology",start:1990,end:2003},

]
// using for Loop
for(let i=0;i<Companies.length;i++)
{
    console.log(Companies);
}
//  Using forEach()
Companies.forEach((num)=>console.log(num))
Companies.forEach((num1)=>console.log(num1.name))
Companies.forEach((num2)=>console.log(num2.category))

//.filter()
let arr21=[10,22,12,13,89,23,21]
let resEven=arr21.filter((num)=>num>21)
console.log(resEven)


let  arr22=[]
for(let i=0;i<arr21.length;i++)
{
    if(arr21[i]>=12)
    {
        arr22.push(arr21[i])
    }  
}
console.log(arr22)
//.filter()
 let start1=Companies.filter((start)=>start.start===2001)
console.log(start1)

let start2= Companies.filter((category)=>category.category=="Finance")
console.log(start2)
//company of 20s

let start3= Companies.filter((company)=> company.start>=2000 && company.end>=2000)
console.log(start3)
// company that lasted for  10 years or more
let start4= Companies.filter((company)=> company.end - company.start>=10)
console.log(start4)


// map se hm naya array create kar sakte hain
const CompanyNames= Companies.map(function(company){
    //return 1;
   return `${company.name} [${company.start}- ${company.end}]`
});
    console.log(CompanyNames)

