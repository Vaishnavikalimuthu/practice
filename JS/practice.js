

//https://meet.google.com/bqa-bjgs-tvj?authuser=0&hl=en_GB


//String functions
// var s=`Avaishnavi.kalimuthu.`
// console.log(s.length)
// console.log(s.slice(-11))
// console.log(s.substring(12,9))
// console.log(s.replace("i","e"))
// console.log(s.replaceAll("v","Nilla"))
// console.log(s.toUpperCase())
// console.log(s.concat("nila"))
// console.log(s.trim())
// var v="999"
// console.log(v.padStart(10,"x"))
// console.log(v.padEnd(10,"x"))
// console.log(s.charAt(7))    // find the prticular value
// console.log(s.charCodeAt(0)) //husky code of particular index
// console.log(s.split("h"))
// console.log(s.indexOf("a"))
// console.log(s.lastIndexOf("a"))
// console.log(s.search("s"))

//math functions
// var x = 64
// var y = 123.9
// //console.log(Math.abs(x))
// console.log(Math.ceil(x))
// console.log(Math.floor(y))
// console.log(Math.min(1,9,7,5,6,9))
// console.log(Math.max(1,9,7,5,6,9))
// console.log(Math.pow(5,3))
// console.log(Math.random()*100)
// console.log(Math.round(Math.random()*1000))
// console.log(Math.sqrt(x))
// console.log(Math.PI)

//conditional statments

//if-else
// const a=23
// const b=23

// if(a>b){
//     console.log("a is greater than b")
// }
// else if(a<b){
//     console.log("b is greater than a")
// }
// else{
//     console.log("same")
// }

// //switch

// const day=9
// switch(day){
//     case 1:
//     console.log("sun")
//     break
//     case 2:
//     console.log("mon")
//     break
//     case 3:
//     console.log("tue")
//     break
//     case 4:
//     console.log("wed")
//     break
//     case 5:
//     console.log("thurs")
//     break
//     case 6:
//     console.log("fri")
//     break
//     case 7:
//     console.log("sat")
//     break
//     default:
//     console.log("enter valid day")
// }

// //loop

// //while
// const aa="Vaishnavi"
// var i =0
// while(i < aa.length){
//     console.log("the char is",i)
//     i++
// }
// //do-while
// const bb="kalimuthu"
// var i =0
// do{
//     console.log("the i is",i)
//     i++ 
// }
// while(i < bb.length){
//     console.log("heyyy")
// }

//for

// const name = "vaish"

// for(var i in name){
//     console.log(name[i])
// }

//array functions

//var arr = [1,2,"hhh",[1,2,3],true,"bb"]
// console.log(arr[3][1])
// console.log(typeof(arr))
// arr.pop()
// arr.push("vaish")
// arr.shift()
// arr.unshift("selva")
// console.log(arr.slice(2,4))
// console.log(arr)
// console.log(arr.splice(2,0,"x"))
// console.log(arr)
//delete(arr[])
//console.log(arr)


// var str = ["p","q","r","s"]
// console.log(str)
//console.log(arr.join(''))


// const mat=[[1,2],[3,4]]
// console.log(mat)
// console.log(mat.flat())

// const array=[1,98,79,39,89,10]
// console.log(array.sort())
// console.log(array.reverse())

//object
// let person = new Object()

// person.firstName = "Vaish";
// person.lastName = "Kalimuthu";
// person.age = 23;
// person.eyeColor = "black";

// console.log(person)

// //obj.

// let obj1 ={
//     name : "vaish",
//     age : 23,
//     year : 2001
// }
// console.log(obj1)

// console.log(obj1.name)

// console.log(obj1["age"])

// obj1.name="selva"

// console.log(obj1.name)

// const obj = {
//     person1:{
//         "name" : "vaish",
//         "age" : 23,
//         "year" : 2001
//     },
//     person2:{
//         "name" : "vaish",
//         age : 23,
//         year : 2001
//     },
//     person3:{
//         name : "vaish",
//         age : 23,
//         year : 2001
//     }
// }

// console.log(obj)

// const obj=[
//    {
//     name:"vaish",
//     age:23,
//     year : 2001
//    },
//    {
//     name:"vaish",
//     age:23,
//     year : 2001
//    },
//    {
//     name:"vaish",
//     age:23,
//     year : 2001
//    }
// ]

// console.log(obj[0].age)

//functions

function name(a,b){
    console.log(a+b)
}
name()
const a = {
    run : function(a){
        console.log(a)
    }
}
a.run(10)

function run(){
    for(i of arguments){
        a.push(i)
    }
    return a
}

console.log(a.run(1,2,3,4))

const arr=[1,2,3,4,5]

for(i in arr){
    console.log(arr[i])
}

//events
// function click(){
//     var x = document.getElementById("name").value
//     document.getElementById("demo1").innerHTML= x
//     console.log(x)

//     var y = document.getElementById("age").value
//     document.getElementById("demo2").innerHTML= y

//     var z = document.getElementById("email").value
//     document.getElementById("demo3").innerHTML= z

// }

//OOP

// class Banking{
//     constructor(account_no,mobile_no,balance_amount){
//         this.account_no = account_no
//         this.mobile_no = mobile_no
//         this.balance_amount = balance_amount
//     }

//     withdraw(amnt_withdraw){
//         this.balance_amount -= amnt_withdraw 
//         return this.balance_amount
//     }

//     deposit(amnt_deposit){
//         this.balance_amount += amnt_deposit
//         return this.balance_amount
//     }
// }


// const user1 = new Banking(8989898,638197578,10000)
// console.log(user1.withdraw(1000))
// console.log(user1.deposit(1000))

// const user2 = new Banking(77777777,67897887,90000)
// console.log(user2.withdraw(20000))
// console.log(user2.deposit(10000))

//sync/async

// console.log(1)
// console.log(2)
// a()
// console.log(3)
// console.log(4)

// function a(){
//     setTimeout((i) => {
//         console.log(5)
//     },1000)
// }
// a()
// b()
 
// console.log(6)
// console.log(7)
// console.log(8)

// let c=0
// function b(){
//     setInterval((i) =>{
//         console.log(c++)
//     },100)
// }
// document.getElementById("demo1").innerHTML=c

//digital clock

// let digitalClock = new Date()
// let hours = digitalClock.getHours()
// let minutes = digitalClock.getMinutes()
// let seconds = digitalClock.getSeconds()


// function clock(){
//     if(hours >= 12){
//         hours -= 12
//         let pm = hours+":"+minutes+":"+seconds+" PM"
//         document.getElementById("clk").innerHTML = pm
        
//     }
//     else{ 
//         let am = hours+":"+minutes+":"+seconds+" AM"
//         document.getElementById("clk").innerHTML = am
//     }
// }

// clock()

//promise

// var prom = new Promise((resolve,reject) =>{
//     let x = false
//     if(x){
//         resolve("i got the data")
//     }
//     else{
//         reject("i didnt get any data please check")
//     }
// })

// prom.then( d => {
//     console.log(d)
// })

// .catch( e => {
//     console.log(e)
// })

//async function
// function a(){
//     return "vaish"
// }
// async function b(){
//     return "vaish"
// }

// console.log(a())
// console.log(b())

// //await
// async function p(){
//     return new Promise((resolve,reject) >= {
//         if(data){
//             resolve("data got")
//         }
//     })
// }

//error handling

// let t = Number(prompt())
// function h(){
//     if(isNaN(t)){
//         throw("plese give a valid no")
//     }
//     else{
//         console.log(t+=2)
//     }
// }
// try{
//     h()
// }
// catch(e){
//     alert(e)
// }
