// let array=[10,20,40,50]

// //console.log(array.at(-1))

// push.array(60);
//  console.log(array.length())

// let arrya =['i' ,'love', 'programming']
// console.log(arrya.splice(1,1))

// searching method


// let arrya=[10,20,true,false]
//  console.log(arrya.indexOf(20))
//  console.log(arrya.includes(30))
//  console.log(arrya.lastIndexOf())

// find method

// let users=[
//     {id:1,name:'hamid', age:20},
//     {id:2,name:'sunny',age:21}
// ]
//  let user = users.find(function(item, index, users){
//     return item.age==20
//  }) 

// map method

// let array =['hamid', 'sunn']

// let newArray=array.map((item)=> item.length)
// console.log(newArray)

//Filter method

//reduce method


// average of the array  of  element

// let num=[10,20,30,40,50]

// let average=num.reduce(function(accumulator,current){
//     accumulator=(accumulator+current)/num.length
//     return accumulator
// },0)
// console.log(average)


// let num=[12,2,3,4,5,2,1,24,10]


// let maxMin = num.reduce(({min,max}, value) => {
//     return({
//         min:Math.min(min,value),
//         max:Math.max(max,value)
//     })
// },{
//     min:Infinity,
//     max:-Infinity
// })
//  console.log(maxMin)

//curring 

//(ex-1)
//  function sum(a){
//     return function x(b){
//         return a+b;
//     }
//  }
//  console.log(sum(10)(20));

//(ex-2)
//  let sum=function(a){
//     return function (b){
//         if(b){
//             return sum(a+b)
//         }
//         return(a)
//  }
// }
// console.log(sum(10)(20)(40)(50)(40)());


//hosting ex

 greetings()

 var greetings = function () {
    console.log('first')
 }
 greetings()
 function greeting() {
    console.log('second')
 }

 greetings()
