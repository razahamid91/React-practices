//sum of elements

let p = [20,40,100,200];
let sum=p.reduce(function(accumulator,current){
    accumulator=(accumulator+current)
    return accumulator
},0)


// average of the array  of  element

let num=[10,20,30,40,50]

let average=num.reduce(function(accumulator,current){
    accumulator=(accumulator+current)/num.length
    return accumulator
},0)
console.log(average)


//max and min value

let num1=[12,2,3,4,5,2,1,24,10]


let maxMin = num1.reduce(({min,max}, value) => {
    return({
        min:Math.min(min,value),
        max:Math.max(max,value)
    })
},{
    min:Infinity,
    max:-Infinity
})
 console.log(maxMin)