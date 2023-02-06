//ex1-

const arr=[1,2,3,4,5,6,7]
const a= arr.map((value,index)=>{
    console.log(value+index)
    
})
 
// ex2

const arr1=[
    { name:'Raj', age:20},
    { name:'sam', age:18},
    { name:'tom', age:22},
    { name:'champ', age:24}

];

arr1.map((value)=>{
    console.log(value.name)

})

//ex3

let array =['hamid', 'sunn']

let newArray=array.map((item)=> item.length)
console.log(newArray)