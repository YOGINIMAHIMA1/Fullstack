let str="yashika"

console.log(str.length)
console.log(str.indexOf('s'))

console.log(str.charAt(1))


x= str.slice(2,5)
console.log(x)
console.log(str)
x= str.substring(3,6)
console.log(x)

x= str.replace('him','she')
console.log(x)

x= str.valueOf();
console.log(x)

x= str.split('')
console.log(x)

str= 'womenwhocode'
x=str.charAt(0).toUpperCase()
x= x+ str.substring(1,12)
console.log(x)
let num=10
x=new Number(10)

console.log(num)
x=num.toString();
console.log( typeof x)//String
console.log(x.length)//2
x=10.23445
console.log(x)
console.log(x.toFixed(3))//10.234----decimal ke baad teen number lega
console.log(x.toPrecision(4))// 10.23----total 4 no lega
x=11
console.log(x.valueOf())//11
x=Number.MAX_VALUE
console.log(x)// 1.7976931348623157e+308

x=Number.MIN_VALUE
console.log(x)//5e-324

